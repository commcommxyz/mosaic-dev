const { red, blue, green, yellow, dim, bold } = require("chalk");
const { Wallet, providers } = require("ethers");
const { Decimal, UserTrove, MoUSD_LIQUIDATION_RESERVE } = require("@liquity/lib-base");
const { EthersMosaic, EthersMosaicWithStore } = require("@liquity/lib-ethers");

function log(message) {
  console.log(`${dim(`[${new Date().toLocaleTimeString()}]`)} ${message}`);
}

const info = message => log(`${blue("ℹ")} ${message}`);
const warn = message => log(`${yellow("‼")} ${message}`);
const error = message => log(`${red("✖")} ${message}`);
const success = message => log(`${green("✔")} ${message}`);

async function main() {
  // Replace URL if not using a local node
  const provider = new providers.JsonRpcProvider("http://localhost:8545");
  const wallet = new Wallet(process.env.PRIVATE_KEY).connect(provider);
  const mosaic = await EthersMosaic.connect(wallet, { useStore: "blockPolled" });

  mosaic.store.onLoaded = () => {
    info("Waiting for price drops...");
    tryToLiquidate(mosaic);
  };

  mosaic.store.subscribe(({ newState, oldState }) => {
    // Try to liquidate whenever the price drops
    if (newState.price.lt(oldState.price)) {
      tryToLiquidate(mosaic);
    }
  });

  mosaic.store.start();
}

/**
 * @param {Decimal} [price]
 * @returns {(trove: UserTrove) => boolean}
 */
const underCollateralized = price => trove => trove.collateralRatioIsBelowMinimum(price);

/**
 * @param {UserTrove}
 * @param {UserTrove}
 */
const byDescendingCollateral = ({ collateral: a }, { collateral: b }) =>
  b.gt(a) ? 1 : b.lt(a) ? -1 : 0;

/**
 * @param {EthersMosaicWithStore} [mosaic]
 */
async function tryToLiquidate(mosaic) {
  const { store } = mosaic;

  const [gasPrice, riskiestTroves] = await Promise.all([
    mosaic.connection.provider
      .getGasPrice()
      .then(bn => Decimal.fromBigNumberString(bn.toHexString())),

    mosaic.getTroves({
      first: 1000,
      sortedBy: "ascendingCollateralRatio"
    })
  ]);

  const troves = riskiestTroves
    .filter(underCollateralized(store.state.price))
    .sort(byDescendingCollateral)
    .slice(0, 40);

  if (troves.length === 0) {
    // Nothing to liquidate
    return;
  }

  const addresses = troves.map(trove => trove.ownerAddress);

  try {
    const liquidation = await mosaic.populate.liquidate(addresses, { gasPrice: gasPrice.hex });
    const gasLimit = liquidation.rawPopulatedTransaction.gasLimit.toNumber();
    const expectedCost = gasPrice.mul(gasLimit).mul(store.state.price);

    const total = troves.reduce((a, b) => a.add(b));
    const expectedCompensation = total.collateral
      .mul(0.005)
      .mul(store.state.price)
      .add(MoUSD_LIQUIDATION_RESERVE.mul(troves.length));

    if (expectedCost.gt(expectedCompensation)) {
      // In reality, the TX cost will be lower than this thanks to storage refunds, but let's be
      // on the safe side.
      warn(
        "Skipping liquidation due to high TX cost " +
          `($${expectedCost.toString(2)} > $${expectedCompensation.toString(2)}).`
      );
      return;
    }

    info(`Attempting to liquidate ${troves.length} Trove(s)...`);

    const tx = await liquidation.send();
    const receipt = await tx.waitForReceipt();

    if (receipt.status === "failed") {
      error(`TX ${receipt.rawReceipt.transactionHash} failed.`);
      return;
    }

    const { collateralGasCompensation, msicGasCompensation, liquidatedAddresses } = receipt.details;
    const gasCost = gasPrice.mul(receipt.rawReceipt.gasUsed.toNumber()).mul(store.state.price);
    const totalCompensation = collateralGasCompensation
      .mul(store.state.price)
      .add(msicGasCompensation);

    success(
      `Received ${bold(`${collateralGasCompensation.toString(4)} REEF`)} + ` +
        `${bold(`${msicGasCompensation.toString(2)} MoUSD`)} compensation (` +
        (totalCompensation.gte(gasCost)
          ? `${green(`$${totalCompensation.sub(gasCost).toString(2)}`)} profit`
          : `${red(`$${gasCost.sub(totalCompensation).toString(2)}`)} loss`) +
        `) for liquidating ${liquidatedAddresses.length} Trove(s).`
    );
  } catch (err) {
    error("Unexpected error:");
    console.error(err);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

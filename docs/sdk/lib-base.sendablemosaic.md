<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [SendableMosaic](./lib-base.sendablemosaic.md)

## SendableMosaic interface

Send Mosaic transactions.

<b>Signature:</b>

```typescript
export interface SendableMosaic<R = unknown, S = unknown> extends _SendableFrom<TransactableMosaic, R, S> 
```
<b>Extends:</b> \_SendableFrom&lt;[TransactableMosaic](./lib-base.transactablemosaic.md)<!-- -->, R, S&gt;

## Remarks

The functions return an object implementing [SentMosaicTransaction](./lib-base.sentmosaictransaction.md)<!-- -->, which can be used to monitor the transaction and get its details when it succeeds.

Implemented by [SendableEthersMosaic](./lib-ethers.sendableethersmosaic.md)<!-- -->.

## Methods

|  Method | Description |
|  --- | --- |
|  [adjustTrove(params, maxBorrowingRate)](./lib-base.sendablemosaic.adjusttrove.md) | Adjust existing Trove by changing its collateral, debt, or both. |
|  [approveUniTokens(allowance)](./lib-base.sendablemosaic.approveunitokens.md) | Allow the liquidity mining contract to use Uniswap REEF/MoUSD LP tokens for [staking](./lib-base.transactablemosaic.stakeunitokens.md)<!-- -->. |
|  [borrowMoUSD(amount, maxBorrowingRate)](./lib-base.sendablemosaic.borrowmsic.md) | Adjust existing Trove by borrowing more MoUSD. |
|  [claimCollateralSurplus()](./lib-base.sendablemosaic.claimcollateralsurplus.md) | Claim leftover collateral after a liquidation or redemption. |
|  [closeTrove()](./lib-base.sendablemosaic.closetrove.md) | Close existing Trove by repaying all debt and withdrawing all collateral. |
|  [depositCollateral(amount)](./lib-base.sendablemosaic.depositcollateral.md) | Adjust existing Trove by depositing more collateral. |
|  [depositMoUSDInStabilityPool(amount, frontendTag)](./lib-base.sendablemosaic.depositmsicinstabilitypool.md) | Make a new Stability Deposit, or top up existing one. |
|  [exitLiquidityMining()](./lib-base.sendablemosaic.exitliquiditymining.md) | Withdraw all staked LP tokens from liquidity mining and claim reward. |
|  [liquidate(address)](./lib-base.sendablemosaic.liquidate.md) | Liquidate one or more undercollateralized Troves. |
|  [liquidateUpTo(maximumNumberOfTrovesToLiquidate)](./lib-base.sendablemosaic.liquidateupto.md) | Liquidate the least collateralized Troves up to a maximum number. |
|  [openTrove(params, maxBorrowingRate)](./lib-base.sendablemosaic.opentrove.md) | Open a new Trove by depositing collateral and borrowing MoUSD. |
|  [redeemMoUSD(amount, maxRedemptionRate)](./lib-base.sendablemosaic.redeemmsic.md) | Redeem MoUSD to native currency (e.g. Ether) at face value. |
|  [registerFrontend(kickbackRate)](./lib-base.sendablemosaic.registerfrontend.md) | Register current wallet address as a Mosaic frontend. |
|  [repayMoUSD(amount)](./lib-base.sendablemosaic.repaymsic.md) | Adjust existing Trove by repaying some of its debt. |
|  [sendMSIC(toAddress, amount)](./lib-base.sendablemosaic.sendmsic.md) | Send MSIC tokens to an address. |
|  [sendMoUSD(toAddress, amount)](./lib-base.sendablemosaic.sendmsic.md) | Send MoUSD tokens to an address. |
|  [stakeMSIC(amount)](./lib-base.sendablemosaic.stakemsic.md) | Stake MSIC to start earning fee revenue or increase existing stake. |
|  [stakeUniTokens(amount)](./lib-base.sendablemosaic.stakeunitokens.md) | Stake Uniswap REEF/MoUSD LP tokens to participate in liquidity mining and earn MSIC. |
|  [transferCollateralGainToTrove()](./lib-base.sendablemosaic.transfercollateralgaintotrove.md) | Transfer [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) from Stability Deposit to Trove. |
|  [unstakeMSIC(amount)](./lib-base.sendablemosaic.unstakemsic.md) | Withdraw MSIC from staking. |
|  [unstakeUniTokens(amount)](./lib-base.sendablemosaic.unstakeunitokens.md) | Withdraw Uniswap REEF/MoUSD LP tokens from liquidity mining. |
|  [withdrawCollateral(amount)](./lib-base.sendablemosaic.withdrawcollateral.md) | Adjust existing Trove by withdrawing some of its collateral. |
|  [withdrawGainsFromStabilityPool()](./lib-base.sendablemosaic.withdrawgainsfromstabilitypool.md) | Withdraw [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) and [MSIC reward](./lib-base.stabilitydeposit.msicreward.md) from Stability Deposit. |
|  [withdrawGainsFromStaking()](./lib-base.sendablemosaic.withdrawgainsfromstaking.md) | Withdraw [collateral gain](./lib-base.msicstake.collateralgain.md) and [MoUSD gain](./lib-base.msicstake.msicgain.md) from MSIC stake. |
|  [withdrawMSICRewardFromLiquidityMining()](./lib-base.sendablemosaic.withdrawmsicrewardfromliquiditymining.md) | Withdraw MSIC that has been earned by mining liquidity. |
|  [withdrawMoUSDFromStabilityPool(amount)](./lib-base.sendablemosaic.withdrawmsicfromstabilitypool.md) | Withdraw MoUSD from Stability Deposit. |

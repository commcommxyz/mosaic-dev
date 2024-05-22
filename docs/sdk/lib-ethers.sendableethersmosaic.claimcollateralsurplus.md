<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-ethers](./lib-ethers.md) &gt; [SendableEthersMosaic](./lib-ethers.sendableethersmosaic.md) &gt; [claimCollateralSurplus](./lib-ethers.sendableethersmosaic.claimcollateralsurplus.md)

## SendableEthersMosaic.claimCollateralSurplus() method

Claim leftover collateral after a liquidation or redemption.

<b>Signature:</b>

```typescript
claimCollateralSurplus(overrides?: EthersTransactionOverrides): Promise<SentEthersMosaicTransaction<void>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentEthersMosaicTransaction](./lib-ethers.sentethersmosaictransaction.md)<!-- -->&lt;void&gt;&gt;

## Remarks

Use [getCollateralSurplusBalance()](./lib-base.readablemosaic.getcollateralsurplusbalance.md) to check the amount of collateral available for withdrawal.

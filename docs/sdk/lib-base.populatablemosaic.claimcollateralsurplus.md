<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [PopulatableMosaic](./lib-base.populatablemosaic.md) &gt; [claimCollateralSurplus](./lib-base.populatablemosaic.claimcollateralsurplus.md)

## PopulatableMosaic.claimCollateralSurplus() method

Claim leftover collateral after a liquidation or redemption.

<b>Signature:</b>

```typescript
claimCollateralSurplus(): Promise<PopulatedMosaicTransaction<P, SentMosaicTransaction<S, MosaicReceipt<R, void>>>>;
```
<b>Returns:</b>

Promise&lt;[PopulatedMosaicTransaction](./lib-base.populatedmosaictransaction.md)<!-- -->&lt;P, [SentMosaicTransaction](./lib-base.sentmosaictransaction.md)<!-- -->&lt;S, [MosaicReceipt](./lib-base.mosaicreceipt.md)<!-- -->&lt;R, void&gt;&gt;&gt;&gt;

## Remarks

Use [getCollateralSurplusBalance()](./lib-base.readablemosaic.getcollateralsurplusbalance.md) to check the amount of collateral available for withdrawal.

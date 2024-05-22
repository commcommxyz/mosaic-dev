<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [PopulatableMosaic](./lib-base.populatablemosaic.md) &gt; [liquidateUpTo](./lib-base.populatablemosaic.liquidateupto.md)

## PopulatableMosaic.liquidateUpTo() method

Liquidate the least collateralized Troves up to a maximum number.

<b>Signature:</b>

```typescript
liquidateUpTo(maximumNumberOfTrovesToLiquidate: number): Promise<PopulatedMosaicTransaction<P, SentMosaicTransaction<S, MosaicReceipt<R, LiquidationDetails>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maximumNumberOfTrovesToLiquidate | number | Stop after liquidating this many Troves. |

<b>Returns:</b>

Promise&lt;[PopulatedMosaicTransaction](./lib-base.populatedmosaictransaction.md)<!-- -->&lt;P, [SentMosaicTransaction](./lib-base.sentmosaictransaction.md)<!-- -->&lt;S, [MosaicReceipt](./lib-base.mosaicreceipt.md)<!-- -->&lt;R, [LiquidationDetails](./lib-base.liquidationdetails.md)<!-- -->&gt;&gt;&gt;&gt;

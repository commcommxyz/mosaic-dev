<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [PopulatableMosaic](./lib-base.populatablemosaic.md) &gt; [liquidate](./lib-base.populatablemosaic.liquidate.md)

## PopulatableMosaic.liquidate() method

Liquidate one or more undercollateralized Troves.

<b>Signature:</b>

```typescript
liquidate(address: string | string[]): Promise<PopulatedMosaicTransaction<P, SentMosaicTransaction<S, MosaicReceipt<R, LiquidationDetails>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string \| string\[\] | Address or array of addresses whose Troves to liquidate. |

<b>Returns:</b>

Promise&lt;[PopulatedMosaicTransaction](./lib-base.populatedmosaictransaction.md)<!-- -->&lt;P, [SentMosaicTransaction](./lib-base.sentmosaictransaction.md)<!-- -->&lt;S, [MosaicReceipt](./lib-base.mosaicreceipt.md)<!-- -->&lt;R, [LiquidationDetails](./lib-base.liquidationdetails.md)<!-- -->&gt;&gt;&gt;&gt;

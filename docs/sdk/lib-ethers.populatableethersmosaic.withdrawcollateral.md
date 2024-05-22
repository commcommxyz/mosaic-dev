<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-ethers](./lib-ethers.md) &gt; [PopulatableEthersMosaic](./lib-ethers.populatableethersmosaic.md) &gt; [withdrawCollateral](./lib-ethers.populatableethersmosaic.withdrawcollateral.md)

## PopulatableEthersMosaic.withdrawCollateral() method

Adjust existing Trove by withdrawing some of its collateral.

<b>Signature:</b>

```typescript
withdrawCollateral(amount: Decimalish, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersMosaicTransaction<TroveAdjustmentDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | The amount of collateral to withdraw from the Trove. |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[PopulatedEthersMosaicTransaction](./lib-ethers.populatedethersmosaictransaction.md)<!-- -->&lt;[TroveAdjustmentDetails](./lib-base.troveadjustmentdetails.md)<!-- -->&gt;&gt;

## Remarks

Equivalent to:

```typescript
adjustTrove({ withdrawCollateral: amount })

```

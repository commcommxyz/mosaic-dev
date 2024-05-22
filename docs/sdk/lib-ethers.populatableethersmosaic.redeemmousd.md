<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-ethers](./lib-ethers.md) &gt; [PopulatableEthersMosaic](./lib-ethers.populatableethersmosaic.md) &gt; [redeemMoUSD](./lib-ethers.populatableethersmosaic.redeemmsic.md)

## PopulatableEthersMosaic.redeemMoUSD() method

Redeem MoUSD to native currency (e.g. Ether) at face value.

<b>Signature:</b>

```typescript
redeemMoUSD(amount: Decimalish, maxRedemptionRate?: Decimalish, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersRedemption>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of MoUSD to be redeemed. |
|  maxRedemptionRate | [Decimalish](./lib-base.decimalish.md) | Maximum acceptable [redemption rate](./lib-base.fees.redemptionrate.md)<!-- -->. |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[PopulatedEthersRedemption](./lib-ethers.populatedethersredemption.md)<!-- -->&gt;

## Remarks

If `maxRedemptionRate` is omitted, the current redemption rate (based on `amount`<!-- -->) plus 0.1% is used as maximum acceptable rate.

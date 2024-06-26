<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-ethers](./lib-ethers.md) &gt; [SendableEthersMosaic](./lib-ethers.sendableethersmosaic.md) &gt; [sendMoUSD](./lib-ethers.sendableethersmosaic.sendmsic.md)

## SendableEthersMosaic.sendMoUSD() method

Send MoUSD tokens to an address.

<b>Signature:</b>

```typescript
sendMoUSD(toAddress: string, amount: Decimalish, overrides?: EthersTransactionOverrides): Promise<SentEthersMosaicTransaction<void>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  toAddress | string | Address of receipient. |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of MoUSD to send. |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentEthersMosaicTransaction](./lib-ethers.sentethersmosaictransaction.md)<!-- -->&lt;void&gt;&gt;


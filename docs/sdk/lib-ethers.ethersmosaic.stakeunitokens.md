<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-ethers](./lib-ethers.md) &gt; [EthersMosaic](./lib-ethers.ethersmosaic.md) &gt; [stakeUniTokens](./lib-ethers.ethersmosaic.stakeunitokens.md)

## EthersMosaic.stakeUniTokens() method

Stake Uniswap REEF/MoUSD LP tokens to participate in liquidity mining and earn MSIC.

<b>Signature:</b>

```typescript
stakeUniTokens(amount: Decimalish, overrides?: EthersTransactionOverrides): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of LP tokens to add to new or existing stake. |
|  overrides | [EthersTransactionOverrides](./lib-ethers.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Exceptions

Throws [EthersTransactionFailedError](./lib-ethers.etherstransactionfailederror.md) in case of transaction failure. Throws [EthersTransactionCancelledError](./lib-ethers.etherstransactioncancellederror.md) if the transaction is cancelled or replaced.

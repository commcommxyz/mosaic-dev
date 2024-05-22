<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [TransactableMosaic](./lib-base.transactablemosaic.md) &gt; [unstakeUniTokens](./lib-base.transactablemosaic.unstakeunitokens.md)

## TransactableMosaic.unstakeUniTokens() method

Withdraw Uniswap REEF/MoUSD LP tokens from liquidity mining.

<b>Signature:</b>

```typescript
unstakeUniTokens(amount: Decimalish): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of LP tokens to withdraw. |

<b>Returns:</b>

Promise&lt;void&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base.transactionfailederror.md) in case of transaction failure.

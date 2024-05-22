<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [TransactableMosaic](./lib-base.transactablemosaic.md) &gt; [withdrawGainsFromStabilityPool](./lib-base.transactablemosaic.withdrawgainsfromstabilitypool.md)

## TransactableMosaic.withdrawGainsFromStabilityPool() method

Withdraw [collateral gain](./lib-base.stabilitydeposit.collateralgain.md) and [MSIC reward](./lib-base.stabilitydeposit.msicreward.md) from Stability Deposit.

<b>Signature:</b>

```typescript
withdrawGainsFromStabilityPool(): Promise<StabilityPoolGainsWithdrawalDetails>;
```
<b>Returns:</b>

Promise&lt;[StabilityPoolGainsWithdrawalDetails](./lib-base.stabilitypoolgainswithdrawaldetails.md)<!-- -->&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base.transactionfailederror.md) in case of transaction failure.

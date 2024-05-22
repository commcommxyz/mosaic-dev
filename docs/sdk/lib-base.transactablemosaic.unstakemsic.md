<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-base](./lib-base.md) &gt; [TransactableMosaic](./lib-base.transactablemosaic.md) &gt; [unstakeMSIC](./lib-base.transactablemosaic.unstakemsic.md)

## TransactableMosaic.unstakeMSIC() method

Withdraw MSIC from staking.

<b>Signature:</b>

```typescript
unstakeMSIC(amount: Decimalish): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base.decimalish.md) | Amount of MSIC to withdraw. |

<b>Returns:</b>

Promise&lt;void&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base.transactionfailederror.md) in case of transaction failure.

## Remarks

As a side-effect, the transaction will also pay out the MSIC stake's [collateral gain](./lib-base.msicstake.collateralgain.md) and [MoUSD gain](./lib-base.msicstake.msicgain.md)<!-- -->.

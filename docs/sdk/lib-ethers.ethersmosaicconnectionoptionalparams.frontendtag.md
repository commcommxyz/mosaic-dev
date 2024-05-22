<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@mosaic/lib-ethers](./lib-ethers.md) &gt; [EthersMosaicConnectionOptionalParams](./lib-ethers.ethersmosaicconnectionoptionalparams.md) &gt; [frontendTag](./lib-ethers.ethersmosaicconnectionoptionalparams.frontendtag.md)

## EthersMosaicConnectionOptionalParams.frontendTag property

Address that will receive MSIC rewards from newly created Stability Deposits by default.

<b>Signature:</b>

```typescript
readonly frontendTag?: string;
```

## Remarks

For example [depositMoUSDInStabilityPool(amount, frontendTag?)](./lib-ethers.ethersmosaic.depositmsicinstabilitypool.md) will tag newly made Stability Deposits with this address when its `frontendTag` parameter is omitted.

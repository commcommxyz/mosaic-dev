// SPDX-License-Identifier: MIT
pragma solidity ^0.6.11;


interface IPriceFeed {
    function latestAnswer() external view returns (int256);
}


contract MoUSDUsdToMoUSDEth is IPriceFeed {
    IPriceFeed public constant MoUSD_USD = IPriceFeed(0x3D7aE7E594f2f2091Ad8798313450130d0Aba3a0);
    IPriceFeed public constant REEF_USD = IPriceFeed(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);

    constructor() public {}

    function latestAnswer() external view override returns (int256) {
        return (MoUSD_USD.latestAnswer() * 1 ether) / REEF_USD.latestAnswer();
    }
}

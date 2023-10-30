// SPDX-License-Identifier: MIT

pragma solidity 0.6.11;

import "../Dependencies/MosaicSafeMath128.sol";

/* Tester contract for math functions in MosaicSafeMath128.sol library. */

contract MosaicSafeMath128Tester {
    using MosaicSafeMath128 for uint128;

    function add(uint128 a, uint128 b) external pure returns (uint128) {
        return a.add(b);
    }

    function sub(uint128 a, uint128 b) external pure returns (uint128) {
        return a.sub(b);
    }
}

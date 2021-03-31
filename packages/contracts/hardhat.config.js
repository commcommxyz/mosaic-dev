require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
require("solidity-coverage");
require("hardhat-gas-reporter");
const accounts = require("./hardhatAccountsList2k.js");
const accountsList = accounts.accountsList
const { secrets } = require("./secrets.js");
const alchemyAPIKey = secrets.alchemyAPIKey

module.exports = {
    paths: {
        // contracts: "./contracts",
        // artifacts: "./artifacts"
    },
    solidity: {
        compilers: [
            {
                version: "0.4.23",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            },
            {
                version: "0.5.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            },
            {
                version: "0.6.11",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            },
        ]
    },
    networks: {
        hardhat: {
            accounts: accountsList,
            gas: 10000000,  // tx gas limit
            blockGasLimit: 12500000, 
            gasPrice: 20000000000,
            forking: {
                url: alchemyAPIKey,
                blockNumber: 12143960
              }
        }
    },
    mocha: { timeout: 12000000 },
    rpc: {
        host: "localhost",
        port: 8545
    },
    gasReporter: {
        enabled: (process.env.REPORT_GAS) ? true : false
    }
};

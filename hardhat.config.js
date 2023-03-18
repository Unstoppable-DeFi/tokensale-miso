/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-vyper");

const { mnemonic, arbiscanApiKey, accounts } = require('./secrets.json')


module.exports = {
    solidity: {
        compilers: [
          {
            version: "0.8.17",
          },
          {
            version: "0.6.12",
          },
        ],
    },

    // vyper: {
    //     version: "0.3.7",
    // },

    networks: {
        arbitrumtest: {
            url: 'https://goerli-rollup.arbitrum.io/rpc',
            chainId: 421613,
            accounts: {mnemonic: mnemonic},
        },
        arbitrum: {
            url: 'https://arb1.arbitrum.io/rpc',
            chanId: 42161,
            accounts: {mnemonic: mnemonic}
        },
        sepolia: {
            url: 'https://eth-sepolia.g.alchemy.com/v2/s6oVq6x1cwpKRiE_p_EweumImh9uPhqv',
            chainId: 11155111,
            accounts: accounts
        },
        hardhat: {
            // forking: {
            //     url: "https://arb-mainnet.g.alchemy.com/v2/_l-6Gj5p08Xp9uNHP3Fo9ZIA95lnN0Lo",
            //     // url: "https://eth-mainnet.g.alchemy.com/v2/Ax-ldw9fWjAtgN1LYztWBFsy0ibFl4TV",
            //     // blockNumber: 22221551
            // }
        }
    },
    etherscan: {
        apiKey: {
            arbitrumOne: arbiscanApiKey // arbiscan.io
        }
    }
};

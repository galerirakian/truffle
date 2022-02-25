const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const privateKeys = fs.readFileSync(".secret").toString().trim();
const fullPathBuildDirectory = `${__dirname}/src/build/contracts`;

module.exports = {
  contracts_build_directory: fullPathBuildDirectory,

  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: "API_ETH",
    bscscan: "API_BSC"
  },
  

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "1337",       // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(privateKeys, `https://ropsten.infura.io/v3/87033fda2e474112b68761b7dabf68f8`),
      network_id: 3,
      confirmations: 20,
      timeoutBlocks: 200,
      skipDryRun: true
    },
	kovan: {
      provider: () => new HDWalletProvider(privateKeys, `https://kovan.infura.io/v3/250d185c96464d9091af129f79d8a5fc`),
      network_id: 42,
      confirmations: 20,
      timeoutBlocks: 200,
      skipDryRun: true
    },
	csc: {
      provider: () => new HDWalletProvider(privateKeys, `https://rpc.coinex.net/`),
      network_id: 52,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
	cet: {
      provider: () => new HDWalletProvider(privateKeys, `https://testnet-rpc.coinex.net/`),
      network_id: 53,
      confirmations: 20,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    	bes: {
      provider: () => new HDWalletProvider(privateKeys, `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,
      confirmations: 20,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(privateKeys, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 20,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "^0.8.11",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};

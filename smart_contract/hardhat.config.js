require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/vSyJWhCmioNRAFKF8XDyjw1r2JUy5tD_',
      accounts: ['bf512ff3ed7b2aaeb7db48dd7ed054136e1928f6e61097dcac532106744c0811'],
    },
  },
};

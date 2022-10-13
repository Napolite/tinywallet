const Web3 = require("web3");

const recoverEthKey = (key) => {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/b20e842ce5744a349f7bf3dffeb703c4"
  );

  const accounts = web3.eth.accounts.privateKeyToAccount(key);

  return accounts;
};

export { recoverEthKey };

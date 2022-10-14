const Web3 = require("web3");
const { ECPairFactory } = require("ecpair");
const ecc = require("tiny-secp256k1");
const bitcoin = require("bitcoinjs-lib");

const recoverEthKey = (key) => {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/b20e842ce5744a349f7bf3dffeb703c4"
  );

  const accounts = web3.eth.accounts.privateKeyToAccount(key);

  return accounts;
};

const genBitcoinAddress = (wifKey) => {
  const EcPair = ECPairFactory(ecc);

  const keyPair = EcPair.fromWIF(wifKey, bitcoin.networks.testnet);

  const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

  return address.address;
};

console.log(genBitcoinAddress());

// export { recoverEthKey, genBitcoinAddress };

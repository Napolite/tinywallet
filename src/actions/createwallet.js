const Web3 = require("web3");
const { BIP32Factory } = require("bip32");
const ecc = require("tiny-secp256k1");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

const createEthWallet = () => {
  const web3 = new Web3(
    "https://mainnet.infura.io/v3/b20e842ce5744a349f7bf3dffeb703c4"
  );

  const newAccount = web3.eth.accounts.create(web3.utils.randomHex(32));

  return newAccount;
};

const createBtcWallet = () => {
  const bip32 = BIP32Factory(ecc);
  const network = bitcoin.networks.testnet;

  const path = `m/44'/1'/0'/0`;

  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  const root = bip32.fromSeed(seed, network);

  const account = root.derivePath(path);
  const node = account.derive(0).derive(0);

  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  return { address: btcAddress, privateKey: node.toWIF(), mnemonic: mnemonic };
  //   console.log(account);
};
// console.log(createBtcWallet());
// export { createEthWallet, createBtcWallet };

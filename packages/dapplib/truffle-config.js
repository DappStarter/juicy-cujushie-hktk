require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stomach rival prefer purpose half enroll equal gather'; 
let testAccounts = [
"0x6a47cf97e6417cd16f94f1796bde43940a79a83cc57a8e7c1f5a85ae4ceb3425",
"0x40163556a99a27d3ef4dc2e5c2adc1a3230af50f2003062c13de68396df7543a",
"0x8a6ce4ef12c3cb48799c3c449b5f5a36ca3e4dbbd90586a4c81e906b9a8cef49",
"0x60a94e109faa8275fbb8081ec06a9a917e772e0ef9e27e4ce72951c0a0adef7a",
"0x2b051bbad35835b254e717eb44f60628a334de88a64e15c3c34f963430b06a6f",
"0x707b84195e3708d3f47c1a965366140761849a42e14a27b66e2a2473e5edf224",
"0x7627000d9a9d78a1a8113d2d4a9460d33014d7d61e4bf90b3ccf8f96bda07616",
"0x509556e206b7d6ec97e1b3b569e366e8e885df27ed48b33f5113ce1cac62d692",
"0xeaee72f7748288abf8d80e289faff82630351a2eac5a93a08a55f38442fbfcb0",
"0x5025658cd03dfdd256e0d9a0512d8707445839fe4468f0df8d512ce0a1f429c3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


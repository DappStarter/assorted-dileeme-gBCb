require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remain minor hockey clinic forget sleep'; 
let testAccounts = [
"0x99d18d940900f45a2b3bcd82f95f272b070ef9727d4d61a03cec2567f63ec7a5",
"0x6d69360b148df03af01f83582d4b0ec4d74cdf93f1c7fa7c87ea671bc68382be",
"0x8f9a93eec8c7b0ccce5f280a4c2fb9add62575c6ddebec09b25c2180624642f9",
"0x2de16c0a8dddfef886185ffed8436e2d9db10a830ef36fb52880ed83b8cdc121",
"0x310df0bb134dd68b15badf093d70a300a75115b1923144780f2e494643d08134",
"0xc6ffcc8afd743918660cdad97c38b7246ab94ae9b192d077b412b91e6ecdc95d",
"0x3e4016669eaf36851c8f38eeec024be18247a36dc3078cdf18b0bad45255b7d0",
"0xcfb40823edc8110f9fc65d665616c5cac01edd46d1894789018db5cd31e201eb",
"0x2ec4114821a722948fd2cea7b1a4f82fed90d2017661accabbb42f9c0bd6b145",
"0x097a6b085ec003eea9b36954b9a816a16585b1bdc5cc6f2035619f6c1164d20c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



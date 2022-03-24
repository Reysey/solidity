import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

const web3Provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
// const provider = new web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
const web3 =  new Web3(web3Provider);

console.log(web3);

export default web3;
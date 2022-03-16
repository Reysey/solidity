
import Web3 from "web3";

let web3;
const ethEnabled = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
}
ethEnabled();

// import Web3 from "web3";
// import HDWalletProvider from 'truffle-hdwallet-provider';
// const provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
// const web3 = new Web3(provider);

export default web3;
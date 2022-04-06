import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

// const web3Provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
// // const provider = new web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
// const web3 =  new Web3(web3Provider);

// const web3 = new Web3(web3Provider);

let web3;
if(typeof window !== 'undefined'){
    // WE ARE IN THE BROWSER
    console.log("%cWE ARE IN THE BROWSER", "font-weight:900;color:blue;");
    if(typeof window.web3 !== 'undefined'){
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        web3 = new Web3(window.ethereum);
    }
    else {
        // WE ARE ON THE SERVER OR THE USER IS NOT RUNNING METAMASK
        // const web3Provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
        console.log("%cWEB3 HTTP PROVIDER", "font-weight:900;color:green;");
        const web3httpProvider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
        web3 = new Web3(web3httpProvider);
    }
}

export default web3;
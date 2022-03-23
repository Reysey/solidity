const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// const provider = new HDWalletProvider('laptop during federal recycle give input vivid skirt audit bridge pulp together', 'https://rinkeby.infura.io/v3/080f8488d0094b8993d9a1b63c5a3bce'
const provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545'
);

const web3 = new Web3(provider);

const deploy = async () => {
    // GET A LIST OF ALL ACCOUNTS THAT ARE UNLOCKED
    const accounts = await web3.eth.getAccounts();

    // DEBUGING
    console.log(accounts);
    console.log(this);
    const nonce     = await web3.eth.getTransactionCount(accounts[0]);
    console.log("Transaction Count  : "+nonce);
    const block     = await web3.eth.getBlock("latest");
    console.log("block              : " + block);
    const gasLimit  = block.gasLimit;
    console.log("gasLimit           : " + gasLimit);
    const gasPrice  = await web3.eth.getGasPrice();
    console.log("gasPrice           : " + gasPrice);
    const calGasPrice = parseInt((gasPrice / gasLimit) + gasLimit);
    console.log("calGasPrice        : " + calGasPrice);

    //


    console.log('Attempting To Deploy From Account', accounts[0]);

    // CONTRACT CREATION PROCESS
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({
            gas: '1000000',
            from: accounts[0]
        }).on('error', error => {
            console.log(error);
        });

    // result.catch((err)=>{console.log(err)});
    console.log(compiledFactory.interface);
    console.log('Contract Deployed To', result.options.address);
};

deploy();

// COONTRACT DEPLOYED TO ADDRESS: 0xb058afa7490BB081B0d17eA8b0e3850e2747B569
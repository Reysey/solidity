//
const path = require('path');

// SOLIDITY COMPILER
const solc = require('solc');

// FILE SYSTEM
const fs   = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// 
const campaignsPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

// READ SOURCE CODE
const source = fs.readFileSync(campaignsPath, 'utf8');


// COMPILE THE SOLIDITY CONTRACT
// console.log(source);
// console.log(solc.version.call());
// console.log(solc.compile(source, 1));
 const output = solc.compile(source, 1).contracts;
// console.log(output[':Campaign']);
// console.log(output[':Campaign'].bytecode);
// console.log(output[':Campaign'].interface);

// CHECK IF FOLDER EXISTS IF NOT CREATE IT.
fs.ensureDirSync(buildPath);


// WRITE OUTPUT TO THE FILE
for (let contract in output){

    fs.outputJsonSync(
        path.resolve(buildPath, getContractName(contract)),
        output[contract]
    );
}

function getContractName(contract) {
    let name = "";
    name = contract+'.json';
    name = name.replace(":", "");
    console.log("contract name: "+ name);
    return name;
}

/*

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts');
// console.log(inboxPath);
const source = fs.readdirSync(lotteryPath, 'utf8');
// console.log(source);
// console.log(source[0]);

const input = {
    'Lottery.sol': fs.readFileSync(path.resolve(__dirname, 'contracts', 'Lottery.sol'), 'utf8')
}

const output = solc.compile({
    sources: input
}, 1);

// console.log(output.contracts['Lottery.sol:Lottery']);
module.exports = output.contracts['Lottery.sol:Lottery'];

*/


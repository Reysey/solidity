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

const output = solc.compile({ sources: input }, 1);

// console.log(output.contracts['Lottery.sol:Lottery']);
module.exports = output.contracts['Lottery.sol:Lottery'];

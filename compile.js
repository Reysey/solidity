const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts');
// console.log(inboxPath);
const source = fs.readdirSync(inboxPath, 'utf8');
// console.log(source);
// console.log(source[0]);

const input = {
    'Inbox.sol': fs.readFileSync(path.resolve(__dirname, 'contracts', 'Inbox.sol'), 'utf8')
}

const output = solc.compile({ sources: input }, 1);

// console.log(output.contracts['Inbox.sol:Inbox']);
module.exports = output.contracts['Inbox.sol:Inbox'];

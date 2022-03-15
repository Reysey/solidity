const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

// console.log("Interface: "+interface);
// console.log("ByteCode: "+bytecode);

let accounts;
let inbox;
let INITIAL_STRING = 'Hi There!';

beforeEach( async () => {
    // GET A LIST OF ALL ACCOUNTS 
    accounts = await web3.eth.getAccounts();

    // USE ONE OF THOSE ACCOUNTS TO DEPLOY

    // THE CONTRACT
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
        data: bytecode,
        arguments: [INITIAL_STRING]
    })
    .send({
        from: accounts[0],
        gas: '1000000'
    })
});

describe('Inbox', ()=>{
    it('deploys a contract', () =>  {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage("Ciao!").send({
            from: accounts[0]
        });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Ciao!');
    });
});



// INFURA END POINT: https://rinkeby.infura.io/v3/080f8488d0094b8993d9a1b63c5a3bce
























/* ganache Accounts
    [
        '0x3ceE3Ed6cF63575AD990e9dC430056C31E815c3b',
        '0xCBEE1d73ae4F363093Fe1081cFDf5C81959DbDa6',
        '0x58f4bade608b0af296aE76CF0A5de6F4c6FEA88B',
        '0x6654fc354f62FD9fC972BE86FAabec9Ee042f1dE',
        '0x57550a4ed40C1AdEC8d675Fd906F4f189df8dABF',
        '0x9F30094383DBB92cCDC54b1E2Dfe69197074F981',
        '0x075D53D49F655b5d87CFB11F411427C81F92C604',
        '0x8Fe8b09F1c0Ee1153AaDEe9749E7577CFd1A2672',
        '0x78EdC27586FF59E3765dCDB141fA107137E6d8aC',
        '0xD354C4F59895488CF90E870Da547A4A75A341b57'
    ]

*/


/*  *******************
INTRODUCTION TO 'mocha'

class Car {
    park() {
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }

}

// RUN BEFORE EACH 'it' test
let car;
beforeEach( () => {
    car = new Car();
});

describe('Car', () => {

    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });

    it('can park', () => {
        assert.equal(car.drive(), 'vroom');
    });

});
*/

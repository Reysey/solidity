const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {
    interface,
    bytecode
} = require('../compile');

// console.log("Interface: "+interface);
// console.log("ByteCode: "+bytecode);

let accounts;
let lottery;

beforeEach(async () => {
    // GET A LIST OF ALL ACCOUNTS 
    accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    // USE ONE OF THOSE ACCOUNTS TO DEPLOY

    // THE CONTRACT
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
});

describe('Lottery', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });

    it('allows one account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);
    });

    it('allows multiple account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        });

        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')
        });

        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0]
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length);
    });

    it('requires a minimum amount of ether to enter', async () => {
        try{
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 0
            });
            assert(false);
        }catch(err){
            assert(err);
        }
    });

    it('only manager can call pickIwnner', async () => {
        try{
            await lottery.methods.pickWinner().send({
                from: accounts[1]
            });
            assert(false);
        }catch(err){
            assert(err);
        }
    });

    it('sends money to the winner and reset the players array', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('2', 'ether')
        });

        const initialBalance = await web3.eth.getBalance(accounts[0]);
        
        await lottery.methods.pickWinner().send({
            from: accounts[0]
        });
        
        const finalBalance = await web3.eth.getBalance(accounts[0]);

        const difference = finalBalance - initialBalance;
        console.log(finalBalance - initialBalance);
        assert(difference > web3.utils.toWei('1.8', 'ether'));

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

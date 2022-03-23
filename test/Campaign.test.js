const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../ethereum/compile');

const compiledFactory   = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign  = require('../ethereum/build/Campaign.json');
const {parsers} = require("mocha/lib/cli/config");

let accounts;
let factory;
let campaignAddress;
let campaign;
let ballance
let _ballance
let ballance_0 = 0;
let ballance_1 = 0;
let tmp;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    // console.log(accounts);

    ballance = await web3.eth.getBalance(accounts[0]);
    ballance = web3.utils.fromWei(ballance, 'ether');
    ballance = parseFloat(ballance);
    tmp = ballance_0 - ballance;

    console.log("ACCOUNT[0] :: PAST    BALLANCE (ETH): ", ballance_0);
    console.log("ACCOUNT[0] :: CURRENT BALLANCE (ETH): ", ballance);
    console.log("ACCOUNT[0] :: LOST    BALLANCE (ETH): ", tmp);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    _ballance = await web3.eth.getBalance(accounts[1]);
    _ballance = web3.utils.fromWei(_ballance, 'ether');
    _ballance = parseFloat(_ballance);
    tmp = ballance_1 - _ballance ;

    console.log("ACCOUNT[1] :: PAST    BALLANCE (ETH): ", ballance_0);
    console.log("ACCOUNT[1] :: CURRENT BALLANCE (ETH): ", ballance);
    console.log("ACCOUNT[1] :: LOST    BALLANCE (ETH): ", tmp);
    console.log("-------------------------------------");

    ballance_0 = ballance;
    ballance_1 = _ballance;

    // DEPLOY AN INSTANCE OF FACTORY CONTRACT BY USING THE STORED COMPILED CONTRACT DATA
    factory     = await new web3
    .eth
    .Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});
    
    // USE FACTORY TO CREATE AN INSTANCE OF THE COMPAIGN
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );  

});

describe('Campaigns' , () => {

    it('deploys a factory and campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
       const manager = await campaign.methods.manager().call();
       assert.equal(accounts[0], manager);
    });

    it('allow people to contribute money and marks them as approvers',async ()=>{
        await campaign.methods.contribute().send({
                value: '200',
                from: accounts[1]
            });

        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it('require a minimum contribution', async () => {
       try{
           await campaign.methods.contribute().send({
               value: '10',
               from: accounts[1]
           });
           assert(false);
       }catch (err){
           assert(err);
       }
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods.createRequest('Buy Batteries', '100', accounts[1]).send({
                from: accounts[0],
                gas: '1000000'
            });
        const request = await campaign.methods.requests(0).call();
        console.log(request);
        assert.equal('Buy Batteries', request.description);
    });

    it('processes requests', async () => {

        await campaign.methods.contribute().send({
           from: accounts[0],
           value: web3.utils.toWei('10', 'ether')
        });

        await campaign
            .methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({from: accounts[0], gas: '1000000'});

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        console.log(await campaign.methods.requests(0).call());

        let ballance = await web3.eth.getBalance(accounts[0]);
        ballance = web3.utils.fromWei(ballance, 'ether');
        ballance = parseFloat(ballance);
        console.log("ACCOUNT[0] BALLANCE: ", ballance);

        ballance = await web3.eth.getBalance(accounts[1]);
        ballance = web3.utils.fromWei(ballance, 'ether');
        ballance = parseFloat(ballance);
        console.log("ACCOUNT[1] BALLANCE: ", ballance);

        await campaign.methods.finalizeRequest(0).send({
           from: accounts[0],
           gas: '1000000'
        });

        let rq = await campaign.methods.requests(0).call();
        console.table(rq);
        console.log("REQUEST [ description ]    : ", rq.description);
        console.log("REQUEST [ value ] (ETH)    : ", web3.utils.fromWei(rq.value, 'ether'));
        console.log("REQUEST [ receipt ]        : ", rq.receipt);
        console.log("REQUEST [ complete ]       : ", rq.complete);
        console.log("REQUEST [ approvalCount ]  : ", rq.approvalCount);

        ballance = await web3.eth.getBalance(accounts[1]);
        ballance = web3.utils.fromWei(ballance, 'ether');
        ballance = parseFloat(ballance);
        console.log(ballance);
        assert(ballance > 104);
    });



});
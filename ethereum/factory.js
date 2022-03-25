import web3 from './web3js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x7670d103e2f8eA60bc13AEC254e69eaceB7A2818');
const accounts = web3.eth.getAccounts().then().catch();
console.log("ACCOUNTS");
console.log(accounts);

export default instance;

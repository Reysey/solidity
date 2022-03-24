import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0xb058afa7490BB081B0d17eA8b0e3850e2747B569');

console.log("##############################################");
console.log("#--------------------------------------------#");
console.log(instance);

export default instance;

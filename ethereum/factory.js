import web3 from './web3js';
import CampaignFactory from './build/CampaignFactory.json';
import customStyles from "../components/customStyle/customStyles";


const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x31101480DE18bb21da7B04B74B19322271812bb8');
const accounts = web3.eth.getAccounts().then().catch();
console.log("%cACCOUNTS",customStyles.info);
console.log("%c"+accounts,customStyles.address);

export default instance;

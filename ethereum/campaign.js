import web3 from "./web3js";
import Campaign from './build/Campaign.json';
import CustomStyles from "../components/customStyle/customStyles";

export default (address) => {
  console.log("%c Address: "+address,CustomStyles.address);
  console.log(JSON.parse(Campaign.interface));
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
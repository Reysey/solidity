import React, {Component} from "react";
import {Button, Table} from "semantic-ui-react";
import web3 from "../ethereum/web3js";
import Campaign from "../ethereum/campaign";
import CustomStyles from "./customStyle/customStyles";


class RequestRow extends Component {

    onApprove = async () => {
        console.log("%cOn Approve Request",CustomStyles.info);
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        try{
            await campaign.methods.approveRequest(this.props.id).send({from: accounts[0]});
        }catch (e) {
            console.log("%c"+e.message,CustomStyles.error);
        }
    };

    onFinalize = async () => {
        console.log("%cOn Finalize Request",CustomStyles.info);
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        try{
            await campaign.methods.finalizeRequest(this.props.id).send({from: accounts[0]});
        }catch (e) {
            console.log("%c"+e.message,CustomStyles.error);
        }
    };

    render() {
        const {Row, Cell} = Table;
        const { id, request, approversCount} = this.props;
        const readyToFinalize = request.approvelCount > approversCount / 2;

        /*
            description     : desc,
            value           : val,
            recipient       : rec,
            complete        : false,
            approvalCount   : 0
        */

        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{request.value}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                    {request.complete ? null : (<Button color="green" basic onClick={this.onApprove}>Approve</Button>)}
                </Cell>
                <Cell>
                    {request.complete ? null : (<Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>)}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;
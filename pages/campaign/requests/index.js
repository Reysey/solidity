import React, { Component } from "react";
import CustomStyles from "../../../components/customStyle/customStyles";
import Layout from "../../../components/layout";
import {Button, Table} from "semantic-ui-react";
import {Link} from '../../../routes';
import campaign from "../../../ethereum/campaign";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {

    static async getInitialProps(props){
        try{
                const {address}         = props.query;
                const campaign          = Campaign(address);
                const requestCount      = await campaign.methods.getRequestsCount().call();
                const approversCount    = await campaign.methods.approversCount().call();
                const requests          = await Promise.all(
                                            await Array(parseInt(requestCount.toString()))
                                                .fill()
                                                .map( async (element, index) => {
                                                    return await campaign.methods.requests(index).call()
                                                })
                                        );


                console.log(requests);

                return {address, requestCount, approversCount, campaign, requests};
        }catch (e){
            console.log("%c"+e.message,CustomStyles.error);
        }
    }

    renderRows(){
        try{
            console.log(this);
            console.log(this.props);
            console.log(this.props.requests);
            return this.props.requests.map((request, index) => {
                return (
                    <RequestRow
                        key={index}
                        id={index}
                        request={request}
                        address={this.props.address}
                        approversCount={this.props.approversCount}
                    />
                );
            });
        }catch (e) {
            console.log("%c"+e.message, CustomStyles.error);
        }
    }

    render(){
        const {
            Header,
            Row,
            HeaderCell,
            Body
        } = Table;

        console.log("%c ON REQUEST INDEX [RENDER] ", CustomStyles.info);

        return(
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaign/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{marginBottom:10}}>
                            Add Request
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>

                    <Body>
                        {this.renderRows()}
                    </Body>

                </Table>
                <div>Found [{this.props.requestCount}] Requests.</div>

            </Layout>
        );
    }
}

export default RequestIndex;
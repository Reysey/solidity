import React, {Component} from "react";
import CustomStyles from "../../../components/customStyle/customStyles";
import web3 from "../../../ethereum/web3js";
import {Form, Button, Message, Input} from "semantic-ui-react";
import { Link, Router } from '../../../routes';
import Layout from "../../../components/layout";
import Campaign from "../../../ethereum/campaign";


class RequestNew extends Component {

    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false
    };

    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const {description, value, recipient} = this.state;

        this.setState({errorMessage:'',loading: true});

        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'wei'),
                recipient
            ).send({from: accounts[0]});
            this.setState({value: '', loading: false});
        }catch (err){
            console.log(err.message, CustomStyles.error);
            this.setState({errorMessage: err.message});
            this.setState({value: '', loading: false});
        }


    }

    render() {
        console.log("%c ON REQUEST NEW [RENDER] ", CustomStyles.info);
        return (
            <Layout>
                <Link route={`/campaign/${this.props.address}/requests`}>
                    <a>
                        <Button primary>Back</Button>
                    </a>
                </Link>
                <h3>CREATE REQUEST</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setState({description: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value In Ether</label>
                        <Input
                            label="Ether"
                            labelPosition="right"
                            value={this.state.value}
                            onChange={event => this.setState({value: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                            value={this.state.recipient}
                            onChange={event => this.setState({recipient: event.target.value})}
                        />
                    </Form.Field>

                    <Message error>
                        <Message.Header>Bingo, Something Went Wrong!</Message.Header>
                        <Message.Content>{this.state.errorMessage}</Message.Content>
                    </Message>

                    <Button primary loading={this.state.loading}>
                        | CREATE |
                    </Button>

                </Form>
            </Layout>
        );
    }

}

export default RequestNew;
import React, {Component} from "react";
import {Button, Form, Input, Message} from "semantic-ui-react";
import campaign from "../ethereum/campaign";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3js";
import {Router} from "../routes";



class ContributeForm extends Component {

    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);

        this.setState({loading: true});

        try{
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            await campaign.methods.contribute().send({
               from: accounts[0],
               value: web3.utils.toWei(this.state.value, 'ether')
            });

            Router.replace(`/campaign/${this.props.address}`);

        }catch (e) {
            console.error("ERROR AT CONTRIBUTE FORM JS :: [ON SUBMIT] -"+e.message);
            this.setState({errorMessage: e.message});
        }

        this.setState({value: '', loading: false});

    }


    render(){
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

                <Form.Field>
                    <label>Amount To Contribute</label>
                    <Input
                        label="Ether"
                        labelPosition="right"
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})}
                    />
                </Form.Field>

                <Message error>
                    <Message.Header>Bingo, Something Went Wrong!</Message.Header>
                    <Message.Content>{this.state.errorMessage}</Message.Content>
                </Message>
                <Button primary loading={this.state.loading}>
                    Contribute
                </Button>

            </Form>
        );
    }
}

export default ContributeForm;
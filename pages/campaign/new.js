import React, {Component} from "react";
import Layout from "../../components/layout";
import {Form,  Button, Input, Message} from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3js";
import {Router} from '../../routes';

class CampaignNew extends Component {

    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        console.log("%c --- ON SUBMIT ---", "font-weight:900;color:green;");

        this.setState({loading: true, errorMessage:''});

        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            console.log("ROUTE");
            Router.pushRoute('/');
        }catch (err){
            // ON ERROR
            console.log("%c  >>> ON ERROR <<<", "font-weight:900;color:red;");
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false});
    };

    render(){
        return (
            <Layout>
                <h3>CREATE NEW CAMPAIGN</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({minimumContribution: event.target.value})}
                        />
                    </Form.Field>

                    <Message error>
                        <Message.Header>Bingo, Something Went Wrong!</Message.Header>
                        <Message.Content>{this.state.errorMessage}</Message.Content>
                    </Message>
                    <Button primary content="Create Campaign" icon="plus circle" loading={this.state.loading}/>
                </Form>

            </Layout>
        );
    }
}

export default CampaignNew;
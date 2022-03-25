import React ,{ Component } from 'react';
import factory from "../ethereum/factory";
import { Card, Button} from 'semantic-ui-react';
import Layout from "../components/layout";
import {Link} from "../routes";

class CampaignIndex extends Component {

    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header      : address,
                description : (<Link route={`/campaign/${address}`}><a>VIEW Campaign</a></Link>),
                fluid       : true
            };
        });

        return <Card.Group items={items} />;
    }


    render() {
        return (
            <Layout>
                <div style={{margin:"0px"}}>
                    {this.renderCampaigns()}
                    <Link route="/campaign/new">
                        <a>
                            <Button style={{marginTop:"20px"}} floated="right" content="Create Campaign" icon="add circle" primary />
                        </a>
                    </Link>
                </div>
            </Layout>
                );
    }
}

export default CampaignIndex;
import React, { Component } from "react";
import Layout from "../../components/layout";
import customStyles from "../../components/customStyle/customStyles";

class CampaignShow extends Component {

    static async getInitialProps(props) {
        console.log("%c"+props.query.address, customStyles.info);
        return {};
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
            </Layout>
        );
    }
}

export default CampaignShow;
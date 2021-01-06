import React from 'react';
import { Weights } from './weights';
import axios from 'axios';
//export class so it can be used in different locations
export class Page1 extends React.Component {

    state = {
        weights: []
    };

    componentDidMount() {//component life cycle hook
        axios.get('https://jsonblob.com/api/3bbbdce4-4fbe-11eb-b13f-ad7a7143d209')
            .then((response) => {
                this.setState({ weights: response.data.weights })
                console.log(response.data.weights)
            }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }} >This is a qick brakedown of  a few weight exercise</h1>
                <Weights weights={this.state.weights}></Weights>
            </div>
        );//pass data from page1 component to weights component
    }
}
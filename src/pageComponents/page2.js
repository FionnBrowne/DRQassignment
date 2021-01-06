import React from 'react';
import { Cardio } from './cardio';
import axios from 'axios';
//export class so it can be used in different locations
export class Page2 extends React.Component {

    state = {
        cardio: []
    };

    componentDidMount() {//component life cycle hook
        axios.get('https://jsonblob.com/api/aa977dfb-4f8d-11eb-bace-53d884cda846')
            .then((response) => {
                this.setState({ cardio: response.data.cardio })
                console.log(response.data.cardio)
            }
            )
            .catch((error) => {
                console.log(error)
            });
    }


    render() {
        return (
            <div>
                <h1 style={{ color: "red" }} >This is a qick brakedown of  a few cardiovascular exercise</h1>
                <Cardio cardio={this.state.cardio}></Cardio>

            </div>
        );//pass data from page2 component to cardio component
    }

}
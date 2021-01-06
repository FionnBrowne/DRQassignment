import React from 'react';
import { ReadDiaryComp } from './readDiaryComp';
import axios from 'axios';

export class ReadDiary extends React.Component {

    constructor(){
        super();

        this.Reload=this.Reload.bind(this);
    }

    state = {
        readDiaryComp: []
    };

    componentDidMount() {//component lifecycle hooks - when visiable to web api method will be exceuted
        axios.get('http://localhost:4000/api/createDiet')//asynchronous by using a promise //now gets data from new api
            .then(
                (response) => {
                    this.setState({ readDiaryComp: response.data })//data coming back as from the response of the web server
                }//response method
            )
            .catch((error) => {
                console.log(error)//logs error to console
            });//if things dont work catch method
    }

    Reload() {
        axios.get('http://localhost:4000/api/createDiet')//asynchronous by using a promise //now gets data from new api
            .then(
                (response) => {
                    this.setState({ readDiaryComp: response.data })//data coming back as from the response of the web server
                }//response method
            )
            .catch((error) => {
                console.log(error)//logs error to console
            });//if things dont work catch method
    }

    render() {
        return (
            <div>
                <h1>This will keep track of your daily calorie and protien intake.</h1>
                <ReadDiaryComp readDiaryComp={this.state.readDiaryComp} Reload={this.Reload}></ReadDiaryComp>
            </div>
        );
    }
}
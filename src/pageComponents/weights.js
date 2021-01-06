import React from 'react';
import { WeightsItem } from './weightsItem';
//export class so it can be used in different locations
export class Weights extends React.Component {

    render() {
        return this.props.weights.map((muscle) => {
            return <WeightsItem muscle={muscle}></WeightsItem>
        })
    }
} 

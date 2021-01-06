import React from 'react';
import { CardioItem } from './cardioItem';
//export class so it can be used in different locations
export class Cardio extends React.Component {

    render() {
        return this.props.cardio.map((stamina) => {
                return <CardioItem stamina={stamina}></CardioItem>
            })
           
               
    }

} //<h1>This is where ill put cardio info </h1>
//{console.log(this.props.stamina)}
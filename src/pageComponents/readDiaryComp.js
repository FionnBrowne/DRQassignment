import React from 'react';
import { ReadDiaryItem } from './readDiaryItem';

export class ReadDiaryComp extends React.Component {

    render() {
        return this.props.readDiaryComp.map((readDiaryComp) => {
            return <ReadDiaryItem readDiaryComp={readDiaryComp} Reload={this.props.Reload}></ReadDiaryItem>
        })


    }
}
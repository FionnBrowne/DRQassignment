import React from 'react';
import Card from 'react-bootstrap/Card';
//export class so it can be used in different locations
export class WeightsItem extends React.Component {   

    render() {
        return (
            <div>
                <Card border="success"  style={{flex:1, backgroundColor:'#aab0a8'}}>
                <Card.Title ><br></br>{this.props.muscle.Excersize}</Card.Title>
                    <Card.Header ><img src={this.props.muscle.Image} width="400" height="200"></img></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        {this.props.muscle.Benefits}<br></br><br></br>
                        {this.props.muscle.Cons}<br></br><br></br>
                            <footer className="blockquote-footer">
                                {this.props.muscle.Guide}
                            </footer>
                        </blockquote>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }

}


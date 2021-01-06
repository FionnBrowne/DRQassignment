import React from 'react';
import Card from 'react-bootstrap/Card';
//export class so it can be used in different locations
export class CardioItem extends React.Component {
   
    render() {
        return (
            <div>
                <Card border="danger"  style={{flex:1, backgroundColor:'#A1FFA1'}}>
                <Card.Title ><br></br>{this.props.stamina.Excersize}</Card.Title>
                    <Card.Header ><img src={this.props.stamina.Image} width="400" height="200"></img></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        {this.props.stamina.Benefits}<br></br><br></br>
                        {this.props.stamina.Cons}<br></br><br></br>
                            <footer className="blockquote-footer">
                                {this.props.stamina.Equipment}
                            </footer>
                        </blockquote>
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }

}


import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//export class so it can be used in different locations
export class ReadDiaryItem extends React.Component {


    constructor() {
        super();

        this.DeleteDiary = this.DeleteDiary.bind(this);
    }
    DeleteDiary(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.readDiaryComp._id);

        axios.delete("http://localhost:4000/api/createDiet/" + this.props.readDiaryComp._id)
            .then(() => {
                this.props.Reload();
            })
            .catch();
    }
    render() {
        return (
            <div>
                <Card border="danger" style={{ flex: 1, backgroundColor: '#A1FFA1' }}>
                    <Card.Title ><br></br>{this.props.readDiaryComp.date}</Card.Title>

                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {this.props.readDiaryComp.calories}<br></br><br></br>
                            <footer className="blockquote-footer">
                                {this.props.readDiaryComp.protien}
                            </footer>
                        </blockquote>

                    </Card.Body>
                    <Link to={"/editDiary/" + this.props.readDiaryComp._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteDiary}>Delete</Button>
                </Card>
            </div>
        );
    }

}


import React from 'react';
import axios from 'axios';
//export class so it can be used in different locations
export class EditDiary extends React.Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeProtien = this.onChangeProtien.bind(this);

        this.state = {
            Date: '',
            Calories: '',
            Protien: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)

        axios.get('http://localhost:4000/api/createDiet/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Date: response.data.date,
                    Calories: response.data.calories,
                    Protien: response.data.poster

                })

            })
            .catch((error) => {
                console.log(error);
            });
    }
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }
    onChangeCalories(e) {
        this.setState({
            Calories: e.target.value
        });
    }
    onChangeProtien(e) {
        this.setState({
            Protien: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();//prevent from being called multiple times
        alert("Date: " + this.state.Date + " Calories: " + this.state.Calories + " Protien: " + this.state.Protien);
        const newDate = {
            date: this.state.Date,
            calories: this.state.Calories,
            protien: this.state.Protien,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/createDiet/' + this.state._id, newDate)
            .then(res => {
                console.log(res.data)
            })
            .catch();



        //passing objects up as lowercase because server.js is looking for them in that case
        /*  axios.post('http://localhost:4000/api/createDiet', newDate)//talks in http to send data to the server//returns promise asyncronisly
             .then((res) => {
                 console.log(res);
             })
             .catch((err) => {
                 console.log(err);
             }); */
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Date: </label>
                        <input type='text' className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <label>Add Calories intake: </label>
                        <input type='text' className='form-control'
                            value={this.state.Calories}
                            onChange={this.onChangeCalories}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <label>Add Protien intake: </label>
                        <input type='text' className='form-control'
                            value={this.state.Protien}
                            onChange={this.onChangeProtien}>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Date'
                            className='btn btn-primary'>
                        </input>
                    </div>
                </form>
            </div>//when button is pressed will execute on submit method
        );
    }
}
import React from 'react';
import axios from 'axios';
//export class so it can be used in different locations
export class CreateDiet extends React.Component {

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
            protien: this.state.Protien
        }//passing objects up as lowercase because server.js is looking for them in that case
        axios.post('http://localhost:4000/api/createDiet', newDate)//talks in http to send data to the server//returns promise asyncronisly
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
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
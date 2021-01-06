import React, { Component } from 'react';
import './App.css';
import { Page1 } from './pageComponents/page1';
import { Page2 } from './pageComponents/page2';
import { CreateDiet } from './pageComponents/createDiet';
import { ReadDiary } from './pageComponents/readDiary';
import { EditDiary } from './pageComponents/editDiary';
import { Bot } from './pageComponents/bot';

import { Image } from './pageComponents/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';//controlls for the nav bar





class App extends Component {//importing a class from react
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Weights</Nav.Link>
              <Nav.Link href="/cardio">Cardio</Nav.Link>
              <Nav.Link href="/createDiet">Track Diet</Nav.Link>
              <Nav.Link href="/readDiary">Diet Track</Nav.Link>
              
            </Nav>
          </Navbar>

          <Image></Image>
          
            <Switch>
              <Route path='/' component={Page1} exact />
              <Route path='/cardio' component={Page2} exact/>
              <Route path='/createDiet' component={CreateDiet} exact/>
              <Route path='/readDiary' component={ReadDiary} exact/>
              <Route path='/editDiary/:id' component={EditDiary} exact/>
            </Switch>
            
            <Bot></Bot>
         

          
        </div>
      </Router>
    );//change local time / date to bottom
  }//closing the render method
}

export default App;

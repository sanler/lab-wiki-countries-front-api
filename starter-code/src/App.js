import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CountriesList from './components/CountriesList';
import Home from './components/Home';
import Compcountry from './components/Compcountry';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/countries' component={Home}/>
          <Route exact path='/countries/:code' component={Compcountry}/>
        </Switch>
      </div>
    );
  }
}

export default App;



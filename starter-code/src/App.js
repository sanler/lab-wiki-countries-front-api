import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={CountriesList}/>
          <Route path='/:id' component={CountryDetails}/>

        </Switch>
      </div>
    );
  }
}

export default App;

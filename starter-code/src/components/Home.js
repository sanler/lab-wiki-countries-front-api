import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from  'react-router-dom';
import {  Route } from "react-router-dom";
import Mynavbar from './Mynavbar';
import Barrapaises from './Barrapaises';
import UnPais from './UnPais';
import CountryDetail from './CountryDetail';
import 'bootstrap/dist/css/bootstrap.css';



class Home extends Component{


    render(){

        return(
      <div>                    
        <Mynavbar/>

          <div className="container">

          <div className="row">
            <Barrapaises/>
          </div>
        </div>
        
      </div>
        );


    }

}

export default Home;
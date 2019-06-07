import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from  'react-router-dom';
import {  Route } from "react-router-dom";
import Mynavbar from './Mynavbar';
import Barrapaises from './Barrapaises';
import UnPais from './UnPais';
import CountryDetail from './CountryDetail';
import Seleccionpais from './Seleccionpais';
import 'bootstrap/dist/css/bootstrap.css';


const Compcountry = (props) => {
 
    const { params } = props.match;
     console.log(params.code);
   


    return (
        <div>                    
        <Mynavbar/>
        
          <div className="container">
          
          <div className="row">
            <Barrapaises/>
            <Seleccionpais codigo={params.code} />
          </div>
        </div>
      </div>
    )
  }
  
  export default Compcountry;
import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from  'react-router-dom';
import Mynavbar from './Mynavbar';
import UnPais from './UnPais';

import 'bootstrap/dist/css/bootstrap.css';



class CountriesList extends Component{
    constructor(){
       
        super();
      
        this.state={

            mycountries: Countries

        }
    }

    render(){

        return(
      <div>                    
        <Mynavbar/>

          <div className="container">

          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
               {this.state.mycountries.map((oneCountry, index) =><UnPais  key={index} oneCountry={oneCountry}/>)
               }
              </div>
            </div>
            <div className="col-7">
              
            </div>
          </div>
        </div>
      </div>
        );


    }

}

export default CountriesList;
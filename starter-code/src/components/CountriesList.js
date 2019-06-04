import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from  'react-router-dom';
import {  Route } from "react-router-dom";

import Mynavbar from './Mynavbar';
import UnPais from './UnPais';
import CountryDetail from './CountryDetail';

import 'bootstrap/dist/css/bootstrap.css';



class CountriesList extends Component{
    constructor(props){
        super(props);
      
        this.state={
            mycountries: Countries,
            code:this.props.match.params.code?this.props.match.params.code:null
        }
    }

    clickToUpdate=(Acode)=>{

      this.setState({
        mycountries: Countries,
        code: Acode
               });
  }

    render(){
      console.log(this.state.code);

        return(
      <div>                    
        <Mynavbar/>

          <div className="container">

          <div className="row">
          
            <div className="col-7">

               {
          
              this.state.code?<CountryDetail clickUpdate={() => this.clickToUpdate(this.state.code)} code={this.state.code}/>:null

               }
            </div>
          </div>
        </div>
        
      </div>
        );


    }

}

export default CountriesList;
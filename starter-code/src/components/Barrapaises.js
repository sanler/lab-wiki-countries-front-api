import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



class BarraPaises extends Component{
    constructor(props){
        super(props);
      
        this.state={
            mycountries: Countries
        }
    }

    

    render(){
      console.log(this.state.code);

        return(
                        
         <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
               {this.state.mycountries.map((oneCountry, index) =><Link className="list-group-item list-group-item-action" key={index} to={`/countries/${oneCountry.cca3}`}>{oneCountry.cca2} {oneCountry.name.common}</Link>)
               }
              </div>
            </div>
      
        );


    }

}

export default BarraPaises;
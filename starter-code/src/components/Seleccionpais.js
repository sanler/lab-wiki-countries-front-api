import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from  'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



class Seleccionpais extends Component{

    constructor(props){
        super(props);
    
      this.state={
        mycountry_name:"",
        mycountry_capital:"",
        mycountry_area:"",
        mycountry_borders: [],
        country_code:[]
        }
    }

    componentDidMount(){

        axios.get(`http://localhost:3001/countries`)
        .then(response => {
         /*   this.setState({mycountry:JSON.stringify(response.data), code:this.state.code});
            console.log('sssssssssssss'+JSON.stringify(response.data));*/
            console.log('sssssssssssss'+JSON.stringify(response.data));
            const respuesta=response.data;
        const paises=[];
          
        respuesta.map((onecountry, index) =>paises.push({code:onecountry.cca3, name: onecountry.name.common}))
            this.setState({ mycountry_name: "",mycountry_capital: "",mycountry_area: "", mycountry_borders:"",country_code:paises });
      console.log(paises);
        })

    }



    componentWillReceiveProps(next_props) {

        axios.get(`http://localhost:3001/countries/${next_props.codigo}`)
        .then(response => {
         /*   this.setState({mycountry:JSON.stringify(response.data), code:this.state.code});
            console.log('sssssssssssss'+JSON.stringify(response.data));*/
            console.log('sssssssssssss'+JSON.stringify(response.data[0].name));

            this.setState({ mycountry_name: response.data[0].name.common,mycountry_capital: response.data[0].capital[0],mycountry_area: response.data[0].area, mycountry_borders:Array.from(response.data[0].borders),country_code:this.state.country_code });
            this.state.mycountry_borders.map((oneborder, index) =>console.log('aaaaaaaaaaaa'+oneborder));
            console.log('a'+this.state.mycountry_borders);
        })

        
      }

       getCountry = (codigo) => {
        const theCountry = oneCountry => {

            console.log(oneCountry.code);
           if(oneCountry.code === codigo){return(oneCountry);};
        }
        return this.state.country_code.find(theCountry);
      };
    


    render(){
        return(
       <div className="col-7">
    <h1>{this.state.mycountry_name}</h1>
    <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{this.state.mycountry_capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.state.mycountry_area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                   {Array.from(this.state.mycountry_borders).map((oneborder, index) =><li key={index}><Link  key={index} to={`/countries/${oneborder}`}>{this.getCountry(oneborder).name} {oneborder}</Link></li>)}
                      </ul>
                  </td>
                </tr>
              </tbody>
            </table>


  
    </div>
        );


    }

}

export default Seleccionpais;

/* {foundCountry.borders.map((oneborder, index) =><li key={index}><Link  key={index} to={`/countries/${oneborder}`}>{getCountry(oneborder,10).name.common}</Link></li>)}*/
//                   {this.state.mycountry_borders.map((oneborder, index) =><li key={index}><Link  key={index} to={`/countries/${oneborder}`}>{oneborder}</Link></li>)}

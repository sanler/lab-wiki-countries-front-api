import React, { Component } from 'react';
//import { myProjects } from './Projects';
import Countries from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SeleccionPais extends Component{

  constructor(props){
    super(props);
  
    console.log(props.codigo);
    this.state={
      mycountry: []
    }
  }
  componentDidMount(props) {   
    console.log('jjjjj'+props.codigo);

    axios.get(`http://206.189.7.127/countries/${props.codigo}`)
    .then(response => {


      console.log(response.data);
        this.setState({mycountry: response.data})
    })
  }

  render(){
    return(
    <div className="col-7">
    <h1>{this.state.mycountry.name.common}</h1>
    <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{this.state.mycountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.state.mycountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {this.state.mycountry.borders.map((oneborder, index) =><li key={index}><Link  key={index} to={`/countries/${oneborder}`}>l</Link></li>)
                         }
                      </ul>
                  </td>
                </tr>
              </tbody>
            </table>

      </div>
    );
  }
}
export default SeleccionPais;
import React from 'react';
//import { myProjects } from './Projects';
import Countries from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SeleccionPais = (props) => {
  console.log(props)
  

  axios.get(`http://localhost:3001/countries/${props.codigo}`)
  .then(response => {
   const name=JSON.stringify(response.data[0].name);
      console.log('sssssssssssss'+name);
      console.log('sssssssssssss'+JSON.stringify(response.data));

  })

  return (
<div><p>{name}</p></div>
  );
}

export default SeleccionPais;


    /*<div className="col-7">
    <h1>{foundCountry.name.common}</h1>
    <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {foundCountry.borders.map((oneborder, index) =><li key={index}><Link  key={index} to={`/countries/${oneborder}`}>{getCountry(oneborder,10).name.common}</Link></li>)
                         }
                      </ul>
                  </td>
                </tr>
              </tbody>
            </table>


  
    </div>*/
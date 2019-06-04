import React from 'react';
//import { myProjects } from './Projects';
import Countries from '../countries.json';
import { Link } from 'react-router-dom';

const SeleccionPais = (props) => {
  console.log(props)

  const getCountry = (codigo) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === codigo;
    }
    console.log(Countries);
    return Countries.find(theCountry)
  };

  

  //const { params } = props.match;
  const foundCountry = getCountry(props.codigo,10);
  console.log(foundCountry.name.common);
  return (
    <div className="col-7">
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


  
    </div>
  )
}

export default SeleccionPais;
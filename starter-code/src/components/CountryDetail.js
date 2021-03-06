import React from 'react';
//import { myProjects } from './Projects';
import Countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log(props)

  const getCountry = (code) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === code;
    }
    console.log(Countries);
    return Countries.find(theCountry)
  };

  //const { params } = props.match;
  const foundCountry = getCountry(props.code,10);
  console.log(foundCountry.name.common);
  return (
    <div>
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
                      </ul>
                  </td>
                </tr>
              </tbody>
            </table>


  
    </div>
  )
}

export default CountryDetail;
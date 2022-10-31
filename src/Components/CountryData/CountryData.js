import React from 'react';
import { Link } from 'react-router-dom';
import './CountryData.css'

const CountryData = (props) => {
    const { name, flags } = props.country;

    return (
        <div className='country-container'>
            <img className='flag-img' src={flags.svg} alt="" />
            <h5 className='country-text'> <span className='ct-name'>Country Name</span> : {name.common}</h5>
            <Link to={`/country/${name.common}`}>Read More <i class="fa-sharp fa-solid fa-person-walking-arrow-right"></i></Link>
        </div>
    );
};

export default CountryData;
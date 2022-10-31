import React from 'react';
import './ShowCountryData.css';

const ShowCountryData = (props) => {
    console.log(props.countryname);
    const { area, capital, coatOfArms, continents, flags, maps, name, population, region, startOfWeek, status, subregion } = props.countryname;
    return (
        <div className='de-container'>
            <div className='detail'>
                <h1>Official Name : {name.official}</h1>
                <h2>Common Name : {name.common}</h2>
                <img className='fimg' src={flags.svg} alt="" />
            </div><hr />

            <div className='first'>
                <div className='first-text'>
                    <h3>Total Population : {population} <i class="fa-solid fa-person-walking-arrow-loop-left"></i></h3>
                    <h4>Region : {region}</h4>
                    <h4>Start Of Week : {startOfWeek}</h4>
                    <h4>Status : {status}</h4>
                    <h4>Subregion : {subregion}</h4>
                    <h4>Capital : {capital}</h4>
                    <h4>Total Area : {area} Square kilometre</h4>
                    <h4>Continents : {continents}</h4>
                </div>
                <div>
                    <h4 className='armi-img'> <span className='first-coen'>Coat Of Armi</span> <br /> <img src={coatOfArms.svg} alt="" /></h4>
                </div>
            </div>
            <hr />
            <div className='footer'><h4><a target='_blanks' href={maps.googleMaps}>Google map</a></h4></div>
        </div>
    );
};

export default ShowCountryData;
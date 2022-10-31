import React, { useEffect, useState } from 'react';
import CountryData from '../CountryData/CountryData';

const AllCountryData = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));
    }, []);
    return (
        <div>
            {
                country.map(country => <CountryData country={country} key={country.id}></CountryData>)
            }
        </div>
    );
};

export default AllCountryData;
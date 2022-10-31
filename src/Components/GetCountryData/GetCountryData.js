import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowCountryData from '../ShowCountryDeta/ShowCountryData';

const GetCountryData = () => {
    const { read } = useParams();
    const [countryname, setCountryname] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${read}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryname(data));
    }, []);

    return (
        <div>
            {
                countryname.map(countryname => <ShowCountryData countryname={countryname}></ShowCountryData>)
            }
        </div>
    );
};

export default GetCountryData;
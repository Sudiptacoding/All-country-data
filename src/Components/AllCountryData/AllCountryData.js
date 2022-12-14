import React, { useEffect, useState } from 'react';
import CountryData from '../CountryData/CountryData';


const AllCountryData = () => {
    const [data, setData] = useState([]);

    const [searchApiData, setSearchApiData] = useState([]);
    const [filterValue, setFilterValue] = useState('');


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSearchApiData(data)
            });
    }, []);
    
    const handleChange = (e) => {
        if (e.target.value === '') {
            setData(searchApiData)
        } else {
            const filterResult = searchApiData.filter(item => item.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
            if (filterResult.length > 0) {
                setData(filterResult)
            }
            else {
                setData(filterResult)
            }

        }
        setFilterValue(e.target.value)
    }

    return (
        <div>
            <input  type="search" placeholder='Search your' value={filterValue} onChange={(e) => handleChange(e)} />
           
            {
                data.map(item => <CountryData item={item}></CountryData>)
            }
        </div>
    );
};

export default AllCountryData;
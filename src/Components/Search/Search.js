import React, { useEffect, useState } from 'react';
import SearchData from '../SearchData/SearchData';

const Search = () => {
    const [data, setData] = useState([]);

    const [searchApiData, setSearchApiData] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setSearchApiData(data)
            }
            )
    }, []);

    const handleChange = (e) => {
        if (e.target.value === '') {
            setData(searchApiData)
        } else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            if (filterResult.length > 0) {
                setData(filterResult)
            }
            else {
                setData([{ name: 'Your Search Name not Found'}])
            }

        }
        setFilterValue(e.target.value)
    }


    return (
        <>
            <input type="search" placeholder='Search' value={filterValue} onChange={(e) => handleChange(e)} />

            {
                data.map(item => <SearchData item={item}></SearchData>)
            }
        </>
    );
};

export default Search;
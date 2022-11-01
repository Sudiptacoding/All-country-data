import React from 'react';

const SearchData = (props) => {
    const {name , email , phone , username} = props.item;
    return (
        <div style={{border:'2px solid red',marginTop:'20px',width:'100%'}}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{username}</h3>
        </div>
    );
};

export default SearchData;
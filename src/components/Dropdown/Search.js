import React, { useState } from 'react';

const Search = ({ searchFunction }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value);
        searchFunction(e.target.value);
    };

    return (
        <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

export default Search;

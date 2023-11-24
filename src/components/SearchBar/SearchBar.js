import React, { useState, useCallback } from 'react';
import './SearchBar.css'

function SearchBar(props) {
    const [word, setWord] = useState('');

    const handleWordChange = useCallback((e) => {
        setWord(e.target.value)
    }, []);

    const search = useCallback(() => {
        props.onSearch(word);
    }, [props.onSearch, word]);

    return (
        <>
            <div className='search_form'>
                <label htmlFor='search' className="label">Search music:</label>
                <input id='search' name='search' type='text' className='input_search' placeholder='Enter A Song Title' onChange={handleWordChange} />
                <button type='submit' className='btn_submit' onClick={search}>Search</button>
            </div>
        </>
    );
}

export default SearchBar;
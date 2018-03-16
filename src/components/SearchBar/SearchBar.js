import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss'

const SearchBar = ({placeholder}) => {
    return (
        <div className="search-bar">
            <div className="search-input">{placeholder}</div>
        </div>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.any
}

export default SearchBar;
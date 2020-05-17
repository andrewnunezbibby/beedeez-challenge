import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchCapsules} from '../redux/actions';

const SearchBar = ({updateSearchTerm}) => {
  return (
    <div>
      <form onChange={updateSearchTerm}>
        <label htmlFor="search-capsules">Search for Capsule(s)</label>
        <input type="search" name="search-capsules" id="search-capsules" />
        <button className="submit-button" type="submit">
          Let's See
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

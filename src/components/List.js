import React from 'react';
import {connect} from 'react-redux';
import search from '../reducers/search';
import getCaps from '../reducers/getCaps';
import Axios from 'axios';
import store from '../redux/store';
import {useState, useEffect} from 'react';
import SearchBar from './SearchBar';

const List = ({capsules}) => {
  const [listedCapsules, setCapsules] = useState([...capsules]);
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = evt => {
    console.log(evt.target.value);
    const matchingCapsules = capsules.filter(cap => cap.name.match(regex));
    setCapsules({listedCapsules: matchingCapsules});
    setSearchTerm({searchTerm: evt.target.value});
  };

  useEffect(() => {});

  return (
    <div className="list-and-search">
      <div>
        <form onChange={evt => updateSearchTerm(evt)}>
          <label htmlFor="search-capsules">Search for Capsule(s)</label>
          <input type="search" name="search-capsules" id="search-capsules" />
          <button className="submit-button" type="submit">
            Let's See
          </button>
        </form>
      </div>

      <ul className="capsule-list">
        {listedCapsules && listedCapsules.length
          ? capsules.map((capsule, index) => {
              return <li key={index}>{capsule.name}</li>;
            })
          : 'WHERE ARE MY CAPSULES?!'}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const {capsules} = state;
};

export default connect(
  mapStateToProps,
  search,
)(List);

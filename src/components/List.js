import React from 'react';
import {connect} from 'react-redux';
// import search from '../reducers/search';
// import getCaps from '../reducers/reducer';
import Axios from 'axios';
import store from '../redux/store';
import {useState, useEffect} from 'react';
import fetchCapsules from '../redux/fetchCapsules';
import {bindActionCreators} from 'redux';
import {
  getCapsules,
  getCapsulesPending,
  getCapsulesError,
} from '../reducers/reducer';
import {fetchCapsPending} from '../redux/actions';

const List = ({capsules, fetchCapsules}) => {
  fetchCapsules();
  // dispatch(fetchCapsPending());
  const [listedCapsules, setCapsules] = useState([capsules]);
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = evt => {
    const searchString = evt.target.value;
    setSearchTerm(searchString);
    const matchingCapsules = capsules.filter(cap =>
      cap.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setCapsules(matchingCapsules);
  };

  return (
    <div className="list-and-search">
      {console.log('LISTED', listedCapsules.length)}
      <div>
        <form onChange={evt => updateSearchTerm(evt)}>
          <label htmlFor="search-capsules">Search for Capsule(s)</label>
          <input type="search" name="search-capsules" id="search-capsules" />
          <button className="submit-button" type="submit">
            Let's See
          </button>
        </form>
      </div>

      {/* <ul className="capsule-list">
        {listedCapsules && listedCapsules.length
          ? listedCapsules.map((capsule, index) => {
              return <li key={index}>{capsule.name}</li>;
            })
          : 'WHERE ARE MY CAPSULES?!'}
      </ul> */}
    </div>
  );
};

const mapStateToProps = state => ({
  error: getCapsulesError(state),
  capsules: getCapsules(state),
  pending: getCapsulesPending(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCapsules: fetchCapsules,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

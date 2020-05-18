import React from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';

const List = ({capsules, error, pending}) => {
  console.log('RECEIVING', capsules);

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
      {console.log('LISTED', listedCapsules)}
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
              return <li key={index}>{capsule.title}</li>;
            })
          : 'WHERE ARE MY CAPSULES?!'}
      </ul> */}
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  capsules: state.capsules,
  pending: state.pending,
});

export default connect(mapStateToProps)(List);

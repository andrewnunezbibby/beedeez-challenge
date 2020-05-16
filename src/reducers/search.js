import axios from 'axios';
import {SEARCH} from '../redux/actions';

const initialState = {
  capsules: [
    {name: 'Prince', prof: 'singer'},
    {name: 'Jodeci', prof: 'singer'},
    {name: 'Patrick', prof: 'star'},
    {name: 'Michael Jordan', prof: 'goat'},
  ],
};

export default function(state = initialState, action) {
  const {searchTerm} = action;
  const regex = new RegExp(searchTerm, 'gi');

  switch (action.type) {
    case SEARCH: {
      return Object.assign({}, state, {
        capsules: state.capsules.filter(cap => cap.name.match(regex)),
      });
    }
    default:
      return initialState;
  }
}

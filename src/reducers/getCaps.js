import axios from 'axios';
import {GET_CAPS} from '../redux/actions';

export default function(state, action) {
  switch (action.type) {
    case GET_CAPS: {
      return state;
    }
    default:
      return state;
  }
}

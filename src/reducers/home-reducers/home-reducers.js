import {
  REQUEST_STATIONS,
  RECEIVE_STATIONS
} from '../../actions/home-actions/home-actions';

/**
 * Reducer for updating the homepage
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} updated state
 */
export default function (state = {}, action) {
  switch (action.type) {
    case REQUEST_STATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    default:
      return state;
  }
}

import {
  REQUEST_HOME,
  RECEIVE_HOME
} from '../../actions/home-actions/home-actions';

/**
 * Reducer for updating the homepage
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} updated state
 */
export default function (state = {}, action) {
  switch (action.type) {
    case REQUEST_HOME:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_HOME:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.set
      });
    default:
      return state;
  }
}

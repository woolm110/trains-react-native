export const REQUEST_HOME = 'REQUEST_HOME';
export const RECEIVE_HOME = 'RECEIVE_HOME';

/**
 * Action for receiving response from HomePage
 * @param response
 * @returns {{type: string, set: Object}}
 */
function receiveHome (response) {
  return {
    type: RECEIVE_HOME,
    set: response.data.objects[0]
  };
}

/**
 * Request HomePage action
 * @returns {{type: string}}
 */
function requestHome () {
  return {
    type: REQUEST_HOME
  };
}

/**
 * Async action creator for getting HomePage data
 * @returns {function}
 */
export function fetchHome () {
  return dispatch => {
    dispatch(requestHome());

    // return ApiService.get(filters)
    //   .then(response => dispatch(receiveHome(response)));
  };
}


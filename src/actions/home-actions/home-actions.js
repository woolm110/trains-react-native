export const REQUEST_STATIONS = 'REQUEST_STATIONS';
export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';

import StationsFactory from '../../shared/factories/stations-factory/stations-factory';

/**
 * Action for receiving response from HomePage
 * @param response
 * @returns {{type: string, data: Object}}
 */
function receiveStations (response) {
  return {
    type: RECEIVE_STATIONS,
    data: response.data.stations
  };
}

/**
 * Request HomePage action
 * @returns {{type: string}}
 */
function requestStations () {
  return {
    type: REQUEST_STATIONS
  };
}

/**
 * Async action creator for getting pagehome data
 * @returns {function}
 */
export function fetchStations () {
  return dispatch => {
    dispatch(requestStations());

    return StationsFactory.getStations().then(response => dispatch(receiveStations(response)));
  };
}


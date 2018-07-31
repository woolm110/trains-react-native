export const REQUEST_STATIONS = 'REQUEST_STATIONS';
export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';
export const SET_ARRIVAL_STATION = 'SET_ARRIVAL_STATION';
export const SET_DEPARTURE_STATION = 'SET_DEPARTURE_STATION';

import StationsFactory from '../../shared/factories/stations-factory/stations-factory';

/**
 * Action for receiving response from HomePage
 * @param response
 * @returns {Object}
 */
function receiveStations (response) {
  return {
    type: RECEIVE_STATIONS,
    data: response.data.stations
  };
}

/**
 * Request HomePage action
 * @returns {Object}
 */
function requestStations () {
  return {
    type: REQUEST_STATIONS
  };
}

/**
 * setDepartureStation
 * @param {String} station
 * @returns {Object}
 */
function setDepartureStation (station) {
  return {
    type: SET_DEPARTURE_STATION,
    data: station
  };
}

/**
 * setArrivalStation
 * @param {String} station
 * @returns {Object}
 */
function setArrivalStation (station) {
  return {
    type: SET_ARRIVAL_STATION,
    data: station
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

/**
 * updateDepartureStation
 * @param  {String} station
 * @return {Function}
 */
export function updateDepartureStation (station) {
  return dispatch => dispatch(setDepartureStation(station));
}

/**
 * updateArrivalStation
 * @param  {String} station
 * @return {Function}
 */
export function updateArrivalStation (station) {
  return dispatch => dispatch(setArrivalStation(station));
}


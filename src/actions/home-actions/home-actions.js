export const REQUEST_STATIONS = 'REQUEST_STATIONS';
export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';
export const SET_ARRIVAL_STATION = 'SET_ARRIVAL_STATION';
export const SET_DEPARTURE_STATION = 'SET_DEPARTURE_STATION';
export const REQUEST_TIMETABLE = 'REQUEST_TIMETABLE';
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE';

import StationsFactory from '../../shared/factories/stations-factory/stations-factory';

/**
 * Request Stations action
 * @returns {Object}
 */
function requestStations () {
  return {
    type: REQUEST_STATIONS
  };
}

/**
 * Receive Stations action
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
 * Request timetable action
 * @returns {Object}
 */
function requestTimetable () {
  return {
    type: REQUEST_TIMETABLE
  };
}

/**
 * Receive timetable action
 * @returns {Object}
 */
function receiveTimetable (response) {
  return {
    type: RECEIVE_TIMETABLE,
    data: response.data.departures.all
  };
}

/**
 * Async action creator for getting pagehome data
 * @returns {function}
 */
export function fetchStations () {
  return dispatch => {
    dispatch(requestStations());

    return StationsFactory.getStations()
      .then(response => dispatch(receiveStations(response)));
  };
}

/**
 * fetchTimetable
 * @param  {String} departureStation
 * @param  {String} arrivalStation
 * @return {Promise}
 */
export function fetchTimetable (departureStation, arrivalStation) {
  return dispatch => {
    dispatch(requestTimetable());

    return StationsFactory.getTrainTimetable(departureStation, arrivalStation)
      .then(response => dispatch(receiveTimetable(response)));
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


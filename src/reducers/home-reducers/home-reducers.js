import {
  REQUEST_STATIONS,
  RECEIVE_STATIONS,
  SET_DEPARTURE_STATION,
  SET_ARRIVAL_STATION,
  REQUEST_TIMETABLE,
  RECEIVE_TIMETABLE
} from '../../actions/home-actions/home-actions';
import appConstants from '../../app.constants.js'

const defaultState = {
  departureStation: appConstants.departureStation,
  arrivalStation: appConstants.arrivalStation
};

/**
 * Reducer for updating the homepage
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} updated state
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_STATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATIONS:
      const stations = action.data
        .map(item => ['name', 'station_code']
          .reduce((accumulator, currentValue) => {
            const mapToNewValue = {
              'name': 'label',
              'station_code': 'value'
            };
            const newValue = mapToNewValue[currentValue] || currentValue;

            return accumulator[newValue] = item[currentValue], accumulator;
          }, {})
      );

      return Object.assign({}, state, {
        isFetching: false,
        stations
      });
    case SET_DEPARTURE_STATION:
      return Object.assign({}, state, {
        departureStation: action.data
      });
    case SET_ARRIVAL_STATION:
      return Object.assign({}, state, {
        arrivalStation: action.data
      });
    case REQUEST_TIMETABLE:
      return Object.assign({}, state, {
        isFetchingTimetable: true
      });
    case RECEIVE_TIMETABLE:
      return Object.assign({}, state, {
        isFetchingTimetable: false,
        timetable: action.data
      });
    default:
      return state;
  }
}

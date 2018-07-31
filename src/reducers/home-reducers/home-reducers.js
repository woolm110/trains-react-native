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
        data: stations
      });
    default:
      return state;
  }
}

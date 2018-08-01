import ApiService from '../../services/api-service/api-service';
import appConstants from '../../../app.constants.js';

const endPointCredentials = `app_id=${appConstants.appId}&app_key=${appConstants.appKey}`;

export default class StationsFactory {
  /**
   * Get a list of stations based on a co-ordinates
   * @returns {Promise}
   */
  static getStations () {
    return ApiService.get(
      `http://transportapi.com/v3/uk/train/stations/bbox.json?${endPointCredentials}&minlon=-${appConstants.minLon}&minlat=${appConstants.minLat}&maxlon=${appConstants.maxLon}&maxlat=${appConstants.maxLat}`
    );
  }

  /**
   * getTrainTimetable
   * @param  {String} departureStationCode
   * @param  {String} arrivalStationCode
   * @return {Object}
   */
  static getTrainTimetable (departureStationCode, arrivalStationCode) {
    return ApiService.get(
      `http://transportapi.com/v3/uk/train/station/${departureStationCode}/live.json?${endPointCredentials}&calling_at=${arrivalStationCode}&train_status=passenger`
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Select, Option } from "react-native-chooser";

import * as homeActions from '../../actions/home-actions/home-actions';

class HomeContainer extends Component {
  /**
   * componentDidMount
   * @return {null}
   */
  componentDidMount () {
    this.props.fetchStations();
  }

  selectDepartureStation (train) {
    console.log(train);
  }

  selectArrivalStation (train) {
    console.log(train);
  }

  /**
   * renderContent
   * @param  {Object} stations
   * @return {JSX}
   */
  renderContent (stations) {
    return (
      <View>
        <Select
          onSelect={this.selectDepartureStation.bind(this)}
          style={{marginBottom: 10}}
          defaultText="Select Departure Station"
        >
          { stations.map(station => <Option value={station.name}>{station.name}</Option>) }
        </Select>
        <Select
          onSelect={this.selectArrivalStation.bind(this)}
          defaultText="Select Arrival Station"
        >
          { stations.map(station => <Option value={station.name}>{station.name}</Option>) }
        </Select>
        <Button
          title="Search"
          color="#841584"
        />
      </View>
    );
  }

  /**
   * React render
   * @returns {JSX}
   */
  render () {
    return (
      <View>
        {
          !this.props.home.isFetching && this.props.home.data && this.renderContent(this.props.home.data)
        }
      </View>
    );
  }
}

HomeContainer.propTypes = {
  fetchStations: PropTypes.func.isRequired,
  home: PropTypes.shape({
    data: PropTypes.Array
  }).isRequired
};

HomeContainer.defaultProps = {
  home: {
    data: {
      items: []
    },
    isFetching: true
  }
};

const mapStateToProps = state => {
  const {
    home
  } = state;

  return {
    home
  };
};

/**
 * Add dispatches to the props
 * @param  {function} dispatch
 * @return {Object}
 */
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Object.assign(
    {},
    homeActions
  ), dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

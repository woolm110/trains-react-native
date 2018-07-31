import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from '../../actions/home-actions/home-actions';

import StationsFactory from '../../shared/factories/stations-factory/stations-factory';

class HomeContainer extends Component {
  /**
   * componentDidMount
   * @return {null}
   */
  componentDidMount () {
    this.props.fetchStations();
  }

  /**
   * renderContent
   * @param  {Object} stations
   * @return {JSX}
   */
  renderContent (stations) {
    return (
      stations.map(station => <Text>{ station.name }</Text>)
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

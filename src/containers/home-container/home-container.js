import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Picker from 'react-native-picker-select';

import * as homeActions from '../../actions/home-actions/home-actions';

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
      <View style={styles.container}>
        <Text style={styles.textInput}>Departure Station</Text>
        <Picker
          items={stations}
          value={this.props.home.departureStation}
          onValueChange={value => this.props.updateDepartureStation(value)}
          style={{ ...pickerSelectStyles }}
        />

        <Text style={styles.textInput}>Return Station</Text>
        <Picker
          items={stations}
          value={this.props.home.arrivalStation}
          onValueChange={value => this.props.updateArrivalStation(value)}
          style={{ ...pickerSelectStyles }}
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textInput: {
    marginTop: 20,
    marginBottom: 2
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    minWidth: '80%',
  }
});

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

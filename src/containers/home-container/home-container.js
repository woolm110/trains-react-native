import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from '../../actions/home-actions/home-actions';

class HomePage extends Component {
  /**
   * componentDidMount
   * @return {null}
   */
  componentDidMount () {
    this.props.fetchHome();
  }

  /**
   * React render
   * @returns {JSX}
   */
  render () {
    return (
      <View>
        {
          <Text>Hello!</Text>
        }
      </View>
    );
  }
}

HomePage.propTypes = {
  fetchHome: PropTypes.func.isRequired,
  home: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
      summary: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape())
    }),
    isFetching: PropTypes.bool
  }).isRequired
};

HomePage.defaultProps = {
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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomeContainer;

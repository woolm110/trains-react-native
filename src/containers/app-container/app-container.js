import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeContainer from '../home-container/home-container'

class AppContainer extends Component {
  /**
   * React render method
   * @returns {JSX}
   */
  render() {
    return (
      <View style={styles.container}>
        <HomeContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default AppContainer;

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
        <Text>Open up fsf.js to start working on your app!</Text>
        <HomeContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppContainer;

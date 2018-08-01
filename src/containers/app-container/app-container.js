import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import HomeContainer from '../home-container/home-container'

class AppContainer extends Component {
  /**
   * React render method
   * @returns {JSX}
   */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HomeContainer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default AppContainer;

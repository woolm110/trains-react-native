import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import AppContainer from './containers/app-container/app-container';

class Root extends Component {
  /**
   * React render method
   * @returns {JSX}
   */
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default Root;

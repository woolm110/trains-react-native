import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
  );
};

const store = configureStore();

export default store;

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

const debuggWrapper = composeWithDevTools({ realtime: true, port: 8000 });

const configureStore = () => {
  return createStore(
    rootReducer,
    debuggWrapper(applyMiddleware(ReduxThunk))
  );
};

const store = configureStore();

export default store;

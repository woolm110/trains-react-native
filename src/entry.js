import Expo from 'expo';
import Root from './index';

if (process.env.NODE_ENV === 'development') {
  require('react-devtools');
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(Root);

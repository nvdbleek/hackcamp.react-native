import {compose, applyMiddleware, createStore} from 'redux';
import {AsyncStorage} from 'react-native';
import reducer from '../reducers/index';
import reduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

export const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(reduxThunk),
    autoRehydrate()
  ),
);

persistStore(store, {
  blacklist: ['ui'],
  storage: AsyncStorage,
});

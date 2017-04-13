import {compose, applyMiddleware, createStore} from 'redux';
import {AsyncStorage} from 'react-native';
import reducer from '../reducers/index';
import reduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

// TODO: Persist and rehydrate your redux store with redux-persist
export const store = createStore(
    reducer,
    undefined,
    compose(
        applyMiddleware(reduxThunk)
        //You can add multiple functions in here
    ),
);

//TODO: persistStore
// Don't forget to blacklist the ui property of the state. It shouldn't be persisted.
// The app should keep his state, even after a reload.
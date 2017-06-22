import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";
import reducer from "../reducers/index";
import reduxThunk from "redux-thunk";
import {autoRehydrate, persistStore} from "redux-persist";

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

import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";
import reducer from "../reducers/index";
import thunk from 'redux-thunk';

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
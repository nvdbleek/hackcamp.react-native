import {ITruck} from "../types/entites";
import {TOGGLE_TRUCK} from "../actions/trucks";

export const initialState = {};

const reducer = {
  [TOGGLE_TRUCK]: (state, truck) =>
    ({...state, [truck.uuid]: !state[truck.uuid]})
};

export const activeTrucks = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};

import {ADD_TRUCK, DELETE_TRUCK, GET_ALL_TRUCKS} from "../actions/trucks";
import {ITruck} from "../types/entites";

export const initialTrucks = [];

const mergeHistory = (state, truck) => {
  const oldTruck = state.find(oldTruck => oldTruck.uuid ===  truck.uuid);
  if (!oldTruck || !oldTruck.coordinateHistory) {
    return [truck.coordinate];
  }

  const result = oldTruck.coordinateHistory.slice(0, 100);
  result.unshift(truck.coordinate);
  return result;
}

const reducer = {
  [ADD_TRUCK]: (state, truck) => {
    return [...state, truck]
  },
  [GET_ALL_TRUCKS]: (state, trucks) => {
    return trucks.map(truck => (
      {...truck, 
        coordinateHistory: mergeHistory(state, truck)}));
  },
  [DELETE_TRUCK]: (state, truck) => {
    return state.filter(t => t.uuid !== truck.uuid)
  }
};

export const trucks = (state = initialTrucks, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};

import {ITruck} from "../types/entites";
import {TOGGLE_TRUCK} from "../actions/trucks";
import {ITruckAction} from "../types/redux";

export const initialState = {};
export interface IActivateTruckReducer {
  [uuid: string] : boolean
}

const reducer = {
  [TOGGLE_TRUCK] : (state: IActivateTruckReducer, truck: ITruck) =>
    ({...state, [truck.uuid]: !state[truck.uuid]})
};

export const activeTrucks = (state: IActivateTruckReducer = initialState, action: ITruckAction) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};

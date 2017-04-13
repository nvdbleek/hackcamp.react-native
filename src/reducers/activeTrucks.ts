import {ITruck} from "../types/entites";
import {TOGGLE_TRUCK} from "../actions/trucks";
import {ITruckAction} from "../types/redux";

export const initialState = {};
export type IActivateTruckReducer  = { [uuid: string] : boolean };

/**
 *
 * activeTrucks
 * this reducer contains all the active trucks
 *
 * The active property doesnt exist on trucks anymore
 * You need to keep track of the active trucks in this reducer
 *
 * TODO:
 * - Support the TOGGLE_TRUCK action
 * - It takes a truck as a parameter and updates the your store accordingly
 */
export const activeTrucks = (state: IActivateTruckReducer = initialState, action: ITruckAction) => {
  return state;
};

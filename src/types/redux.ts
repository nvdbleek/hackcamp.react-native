import {ITruck, IFilters} from "./entites";
import {IUiReducer, Screen} from "../reducers/ui";
import {IActivateTruckReducer} from "../reducers/activeTrucks";
export interface IAction {
  type: string
}

export interface ITruckAction extends IAction {
  payload: ITruck
}

export interface IFilterAction extends IAction {
  payload: IFilters
}

export interface IUiAction extends IAction {
  payload: Screen
}

export interface AppState {
  ui: IUiReducer,
  filter: IFilters,
  trucks: ITruck[],
  activeTrucks: IActivateTruckReducer,
}

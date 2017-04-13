import {ITruck, IFilters} from "./entites";
import {Screen} from "../reducers/ui";
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

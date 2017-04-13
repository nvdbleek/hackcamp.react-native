import {IFilters} from "../types/entites";
import {IFilterAction} from "../types/redux";

export const SET_FILTER = 'SET_FILTER';
export const setFilter = (payload: IFilters): IFilterAction => ({
  type: SET_FILTER,
  payload,
});

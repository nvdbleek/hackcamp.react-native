import {SET_FILTER} from '../actions/filters';
import {EFilter, filters, IFilters} from '../types/entites';
import {IFilterAction} from '../types/redux';

export const initialState: IFilters = filters[EFilter.NONE] as IFilters;

const reducer = {
  [SET_FILTER]: (state: IFilters, filter: IFilters): IFilters => filter,
};

export const filter = (state = initialState, action: IFilterAction) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};

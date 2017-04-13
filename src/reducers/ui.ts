import {SWITCH_SCREENS} from '../actions/ui';
import {IUiAction} from '../types/redux';


export type Screen = 'list' | 'form' | 'map';

export interface IUiReducer {
  currentScreen: Screen
}


export const initialState: IUiReducer = {
  currentScreen: 'list'
};

const reducer = {
  [SWITCH_SCREENS]: (state: IUiReducer, currentScreen: Screen) => ({currentScreen}),
};

export const ui = (state = initialState, action: IUiAction) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};

import {IUiAction} from "../types/redux";
import {Screen} from "../reducers/ui";

export const SWITCH_SCREENS = 'SWITCH_SCREENS';
export const switchScreens = (screen: Screen): IUiAction => ({
  type: SWITCH_SCREENS,
  payload: screen,
});

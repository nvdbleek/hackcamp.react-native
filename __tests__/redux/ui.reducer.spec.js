import {ui, initialState} from '../../src/reducers/ui';
import {SWITCH_SCREENS} from "../../src/actions/ui";


describe('UI Reducer', () => {
  describe('Initial state', () => {
    it('Should return the initial state', () => {
      expect(ui(undefined, {type: '@@INIT'})).toEqual(initialState);
    });
  });

  describe('Switching screens', () => {
    it('Should be able to change screens', () => {
      const action = {
        type: SWITCH_SCREENS,
        payload: 'test'
      };
      expect(ui(initialState, action).currentScreen).toEqual('test');
    });

    it('Should go back to homescreen if no param is passed', () => {
      const action = {
        type: SWITCH_SCREENS,
        payload: 'test'
      };

      const emptyAction = {
        type: SWITCH_SCREENS,
      };
      [ui(initialState, action)]
        .map(state => {
          expect(state.currentScreen).toEqual('test');
          return ui(state, emptyAction);
        })
        .map(({currentScreen}) => expect(currentScreen).toEqual('list'));
    })
  })
});

import {ui, initialState} from '../../src/reducers/ui';
import {SWITCH_SCREENS} from "../../src/actions/ui";


describe('UI Reducer', () => {
  describe('Initial state', () => {
    it('Should return the initial state', () => {
      expect(ui(undefined, {type: '@@INIT'})).toEqual(initialState);
    });
  });

  describe('Switching screens', () => {
    it('Should be able to toggle back and forth between the screens', () => {
      const action = {
        type: SWITCH_SCREENS,
        payload: 'list'
      };
      const action2 = {
        type: SWITCH_SCREENS,
        payload: 'map',
      };
      [ui(undefined, action)]
        .map(result => {
          expect(result.currentScreen).toEqual('list');
          return ui(result, action2);
        })
        .map(result => expect(result.currentScreen).toEqual('map'));
    });
  })
});

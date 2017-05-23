import {trucks, initialTrucks} from '../../src/reducers/trucks';
import {ADD_TRUCK, TOGGLE_TRUCK} from "../../src/actions/trucks";
import {uuid} from "../../src/models/uuid";

describe('Truck Reducer', () => {
  describe('Initial state', () => {
    it('Should return the initial state', () => {
      const action = {
        type: '@@INIT',
      };
      [trucks(initialTrucks, action)]
        .map(result => expect(result).toEqual(initialTrucks));
     });
  });

  describe('Sending actions', () => {
    it('Should be able to add a truck', () => {
      const action = {
        type: ADD_TRUCK,
        payload: {name: 'Awesome truck', active: false, uuid: uuid()}
      };
      [trucks(initialTrucks, action)]
        .map(result => expect(result).toEqual([...initialTrucks, action.payload]));
    });

    it('Should be able to toggle the active property of a truck', () => {
      const actionAdd = {
        type: ADD_TRUCK,
        payload: {
          uuid: 'fdsqjmk333***mMM--',
          name: 'Awesome truck',
          active: false,
        },
      };

      const actionToggle = {
        type: TOGGLE_TRUCK,
        payload: 'fdsqjmk333***mMM--'
      };

      const state = trucks(initialTrucks, actionAdd);
      const nextState = trucks(state, actionToggle);
      const result = nextState.filter(truck => truck.uuid === actionToggle.payload)[0];
      expect(result).toBeTruthy();
      expect(result.active).toEqual(true);
    });
  });
});

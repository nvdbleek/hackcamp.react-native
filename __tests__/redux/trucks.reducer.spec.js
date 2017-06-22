import {trucks, initialTrucks} from '../../src/reducers/trucks';
import {ADD_TRUCK, TOGGLE_TRUCK} from "../../src/actions/trucks";
import {uuid} from "../../src/models/uuid";

describe('Truck Reducer', () => {
  it('Should return the initial state', () => {
    const action = {
      type: '@@INIT',
    };
    [trucks(initialTrucks,  action)]
      .map(result => expect(result).toEqual(initialTrucks));
  });
  it('Should be able to add a truck', () => {
    const action = {
      type: ADD_TRUCK,
      payload: {name: 'Awesome truck', active: false, uuid: uuid()}
    };
    [trucks(initialTrucks, action)]
      .map(result => expect(result).toEqual([...initialTrucks, action.payload]));
  });

});

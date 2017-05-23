import {ADD_TRUCK, TOGGLE_TRUCK} from '../actions/trucks';
import {uuid} from '../models/uuid';

export const initialTrucks = [{
  uuid: uuid(),
  name: "Truck 1",
  active: true
},
  {
    uuid: uuid(),
    name: "Truck 2",
    active: false
  }
];


/**
 * TODO: Implement this reducer
 *
 * Actions for this reducer:
 *
 * ADD_TRUCK: Takes a truck as a parameter and adds it to the state
 * TOGGLE_TRUCK: Takes a truck as a parameter and toggles its active flag
 *
 * You can implement it using either a switch or the functional way
 */
export const trucks = (state = initialTrucks, action) => {
  return state;
};

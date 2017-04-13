import {ADD_TRUCK, DELETE_TRUCK, RECEIVED_ALL_TRUCKS} from '../actions/trucks';
import {ITruck} from '../types/entites';
import {ITruckAction} from '../types/redux';

export const initialTrucks: ITruck[] = [];

interface IReducer {
  [name: string] : (state: ITruck[], payload: ITruck | ITruck[]) => ITruck[]
}

const reducer: IReducer = {
  [ADD_TRUCK]: (state: ITruck[], truck: ITruck): ITruck[] => {
    return [...state, truck]
  },
  [RECEIVED_ALL_TRUCKS]: (state: ITruck[], trucks: ITruck[]): ITruck[] => {
    return trucks;
  },
  [DELETE_TRUCK]: (state: ITruck[], truck: ITruck): ITruck[] => {
    return state.filter(t => t.uuid !== truck.uuid)
  }
};

export const trucks = (state: ITruck[] = initialTrucks, action: ITruckAction): ITruck[] => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};

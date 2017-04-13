import {ITruck} from "../types/entites";
import {ITruckAction} from "../types/redux";
import axios from "axios";
import {BACKEND_URL} from "../constants/backend";


export const  GET_ALL_TRUCKS = 'GET_ALL_TRUCKS';
export const getAllTrucks = (): Function => (dispatch: Function) => {
  axios.get(`${BACKEND_URL}/trucks`)
    .then(trucks => {
      dispatch({
        type: GET_ALL_TRUCKS,
        payload: trucks.data
      });
    })
};

export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruck = (payload: ITruck): Function => (dispatch:Function) => {
  return axios.post(`${BACKEND_URL}/trucks`, payload)
    .then(({data: payload}) =>  {
      dispatch({
        type: ADD_TRUCK,
        payload
      });
      dispatch(toggleTruck(payload));
    });
};

export const TOGGLE_TRUCK = 'TOGGLE_TRUCK';
export const toggleTruck = (payload: ITruck): ITruckAction => ({
  type: TOGGLE_TRUCK,
  payload,
});

export const DELETE_TRUCK = "DELETE_TRUCK";
export const deleteTruck = (payload: ITruck): Function => (dispatch:Function) => {
  dispatch({
    type : DELETE_TRUCK,
    payload: payload,
  });
  return axios.delete(`${BACKEND_URL}/trucks/${payload.uuid}`)
};


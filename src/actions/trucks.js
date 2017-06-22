import {ITruck} from "../types/entites";
import axios from "axios";
import {BACKEND_URL} from "../constants/backend";


export const GET_ALL_TRUCKS = 'GET_ALL_TRUCKS';
export const getAllTrucks = () => dispatch => {
  axios.get(`${BACKEND_URL}/trucks`)
    .then(trucks => {
      dispatch({
        type: GET_ALL_TRUCKS,
        payload: trucks.data
      });
    })
};


export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruck = payload => dispatch => {
  return axios.post(`${BACKEND_URL}/trucks`, payload)
    .then(({data: payload}) => {
      dispatch({
        type: ADD_TRUCK,
        payload
      });
    });
};

export const TOGGLE_TRUCK = 'TOGGLE_TRUCK';
export const toggleTruck = payload => ({
  type: TOGGLE_TRUCK,
  payload,
});

export const DELETE_TRUCK = "DELETE_TRUCK";
export const deleteTruck = payload => dispatch => {
  dispatch({
    type: DELETE_TRUCK,
    payload: payload,
  });
  return axios.delete(`${BACKEND_URL}/trucks/${payload.uuid}`)
};


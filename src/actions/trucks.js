import {ITruck} from "../types/entites";
import axios from "axios";
import {BACKEND_URL} from "../constants/backend";

// TODO: Fetch the trucks from the backend
// URL: BACKEND_URL + '/trucks'
// METHOD: GET
// Response:
// {
//  data: truck[]
// }
// If the get is successful, dispatch an action containing the trucks
export const GET_ALL_TRUCKS = 'GET_ALL_TRUCKS';
export const getAllTrucks = () => dispatch => {
    return axios.get(BACKEND_URL + '/trucks')
        .then(
            response => {
                dispatch({
                    type: GET_ALL_TRUCKS,
                    payload: response.data
                })
            } 
        )
};

// TODO: Create a truck and add it to the backend
// URL: BACKEND_URL + '/trucks'
// METHOD: POST
// Response:
// {
//  data: truck
// }
// If the post is successful, dispatch an action containing the truck
export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruck = payload => dispatch => {
    return axios.post(BACKEND_URL + '/trucks', { payload })
        .then(
            response => {
                dispatch({
                    type: ADD_TRUCK,
                    payload: response.data
                })
            } 
        )
};

// TODO: Return an action containing the truck
export const TOGGLE_TRUCK = 'TOGGLE_TRUCK';
export const toggleTruck = payload => ({
    type: TOGGLE_TRUCK,
    payload
});

// TODO: Delete a truck from the backend and from the local store
// URL: BACKEND_URL + '/trucks' + truck uuid
// METHOD: DELETE
// Successful status: 204
// If the delete is successful, dispatch an action containint ghe truck
export const DELETE_TRUCK = "DELETE_TRUCK";
export const deleteTruck = payload => dispatch => {
    return axios.delete(BACKEND_URL + '/trucks/' + payload)
        .then(
            response => {
                dispatch({
                    type: DELETE_TRUCK,
                    payload
                })
            } 
        )
};


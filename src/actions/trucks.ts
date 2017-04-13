import {ITruck} from "../types/entites";
import {ITruckAction} from "../types/redux";
import axios from "axios";
import {BACKEND_URL} from "../constants/backend";

// TODO: Fix the actions in this file

//TODO: return an action containing all the trucks
export const RECEIVED_ALL_TRUCKS = "RECEIVED_ALL_TRUCKS";
export const receivedAllTrucks = (payload: ITruck[]): Function => (dispatch: Function) => {
};

// TODO: Fetch the trucks from the backend
// URL: BACKEND_URL + '/trucks'
// METHOD: GET
// Response:
// {
//  data: ITruck[]
// }
// hint : call receivedAllTrucks when trucks are fetched.
export const  GET_ALL_TRUCKS = 'GET_ALL_TRUCKS';
export const getAllTrucks = (): Function => (dispatch: Function) => {
};

// TODO: Create a truck and add it to the backend
// URL: BACKEND_URL + '/trucks'
// METHOD: POST
// Response:
// {
//  data: ITruck
// }
// TODO: Return an action containing the truck
export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruck = (payload: ITruck): Function => (dispatch:Function) => {
};


// TODO: Return an action containing the truck
export const TOGGLE_TRUCK = 'TOGGLE_TRUCK';
export const toggleTruck = (payload: ITruck): ITruckAction => {
};

// TODO: Delete a truck from the backend and the local store
// URL: BACKEND_URL + '/trucks' + truck uuid
// METHOD: DELETE
// Response: null
export const DELETE_TRUCK = "DELETE_TRUCK";
export const deleteTruck = (payload: ITruck): Function => (dispatch:Function) => {
};


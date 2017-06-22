import {ITruck} from "../types/entites";
import {TOGGLE_TRUCK} from "../actions/trucks";

/**
 *
 * your state should look like this
 * {
 *  "fdjsmklfdsq": true,
 *  "fdjqsklm": false,
 *  "jkmlfq": true
 * }
 *
 * keys being trucks and properties being their active property
 */

export const initialState = {};

export const activeTrucks = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_TRUCK:
            const newState =  {...state, };
            newState[action.payload.uuid] = !newState[action.payload.uuid];
            return newState;
        default:
            return initialState;
    }
};

import React from 'react';
import { RECEIVE_BOARD } from '../actions/board_actions';

import {
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN,
    RECEIVE_ERRORS } from "../actions/pin_actions";


const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_PINS:
            // debugger
            return action.pins
        case RECEIVE_PIN:
            // debugger
            return Object.assign({}, state, { [action.pin.pin.id]: action.pin.pin });
        case RECEIVE_BOARD:
            if (action.board.pins === undefined){
                return {}
            } else{
            return action.board.pins
            };
        default:
            return state;
    }
}

export default pinsReducer;

import React from 'react';
import { RECEIVE_BOARD } from '../actions/board_actions';

import {
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN,
    RECEIVE_ERRORS } from "../actions/pin_actions";


const pinsReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_PINS:
            debugger
            return action.pins
        case RECEIVE_PIN:
            debugger
            return action.pin;
        case RECEIVE_BOARD:
            return action.board.pins;
        default:
            return state;
    }
}

export default pinsReducer;

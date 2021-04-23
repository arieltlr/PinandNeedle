import React from 'react';
import { RECEIVE_BOARD, RECEIVE_PROFILE } from '../actions/board_actions';

import {
    RECEIVE_PINS,
    RECEIVE_PIN,
    REMOVE_PIN,
    RECEIVE_ERRORS, 
    SHOW_PIN } from "../actions/pin_actions";


const pinsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PINS:
            return action.pins;
        case SHOW_PIN:
            return action.pin.pins
        case RECEIVE_PIN:

            return Object.assign({}, state, { [action.pin.pin.id]: action.pin.pin });
            
        case RECEIVE_BOARD:
            if (action.board.pins === undefined || action.board.pins.length === 0){
                return state
            } else{
            return action.board.pins
            };
        case RECEIVE_PROFILE:
            
            return Object.assign({}, state, action.userProfile.pins)
        default:
            return state;
    }
}

export default pinsReducer;

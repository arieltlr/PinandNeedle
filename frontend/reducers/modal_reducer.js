import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';
import { RECEIVE_BOARD, RECEIVE_PROFILE } from '../actions/board_actions';
import {RECEIVE_PIN, REMOVE_PIN, SHOW_PIN} from '../actions/pin_actions';

const modalReducer = (state=null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_PIN:
            return null; 
        case SHOW_PIN:
            return null;
        case REMOVE_PIN:
            return null;
        case RECEIVE_BOARD:
            return null;
        case RECEIVE_PROFILE:
            return null;   
        default:
            return state;
    }
}

export default modalReducer;
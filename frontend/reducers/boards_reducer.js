import { RECEIVE_BOARD, REMOVE_BOARD, RECEIVE_ERRORS, RECEIVE_PROFILE } from "../actions/board_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PIN } from '../actions/pin_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_PROFILE:
            return action.userProfile.boards;
        case RECEIVE_BOARD:
            // debugger
            return Object.assign({}, state, { [action.board.id]: action.board });
        case REMOVE_BOARD:
            // debugger
            const newState = Object.assign({}, state);
            // debugger
            delete newState[action.boardId];
            return newState;
        case RECEIVE_PIN:
            debugger
            return Object.assign({}, action.pin.user.boards);   
        default:
            return state;
    }
}

export default boardsReducer;

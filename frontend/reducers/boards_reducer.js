import { RECEIVE_BOARD, REMOVE_BOARD, RECEIVE_ERRORS, RECEIVE_PROFILE } from "../actions/board_actions";
import { RECEIVE_PIN } from '../actions/pin_actions';

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE:
            if (action.userProfile.boards === undefined){
                return {};
            } else {
                return action.userProfile.boards;
            } 
        case RECEIVE_BOARD:
            
            return Object.assign({}, state, { [action.board.id]: action.board });
        case REMOVE_BOARD:
            const newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState;
        case RECEIVE_PIN:   
            return Object.assign({}, action.pin.user.boards);   
        default:
            return state;
    }
}

export default boardsReducer;

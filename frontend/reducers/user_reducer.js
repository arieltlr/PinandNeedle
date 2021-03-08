import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BOARD, RECEIVE_PROFILE } from '../actions/board_actions';
import { RECEIVE_PIN } from '../actions/pin_actions';


const userReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_PROFILE:
            // debugger
            return Object.assign({}, state, {[action.userProfile.id]: action.userProfile});
        case RECEIVE_BOARD:
            // debugger
            return Object.assign({}, state, { [action.board.user.id]: action.board.user });
        case RECEIVE_PIN:
            // debugger
            return Object.assign({}, state, {[action.pin.user.id]: action.pin.user});   
        default:
            return state;
    }
}

export default userReducer;
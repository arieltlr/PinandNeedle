import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BOARD, RECEIVE_PROFILE } from '../actions/board_actions';
import { RECEIVE_PIN, SHOW_PIN } from '../actions/pin_actions';
import { RECEIVE_BOARDS_PINS_ASSOC } from '../actions/boards_pins_actions';

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_PROFILE:
            return Object.assign({}, state, {[action.userProfile.id]: action.userProfile});
        case RECEIVE_BOARD:
            debugger
            return Object.assign({}, state, { [action.board.user.id]: action.board.user });
        case RECEIVE_PIN:
            return Object.assign({}, state, {[action.pin.user.id]: action.pin.user});
        case SHOW_PIN:
            if (Object.keys(state).includes(action.pin.user.id.toString())){
                return state;
            } else {
                return Object.assign({}, state, {[action.pin.user.id]: action.pin.user});
            }
            
        case RECEIVE_BOARDS_PINS_ASSOC:
            if (action.boardsPins.user){
                const newState = Object.assign({}, state);
                delete newState[action.boardsPins.user.id];
                return Object.assign({}, newState, {[action.boardsPins.user.id]: action.boardsPins.user})
            } else {
                return state;
            }
               
        default:
            return state;
    }
}

export default userReducer;
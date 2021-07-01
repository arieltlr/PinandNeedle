import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BOARD, RECEIVE_PROFILE } from '../actions/board_actions';
import { RECEIVE_PIN, SHOW_PIN } from '../actions/pin_actions';
import { RECEIVE_BOARDS_PINS_ASSOC } from '../actions/boards_pins_actions';
import { RECEIVE_FOLLOW, UNFOLLOW } from "../actions/follow_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_PROFILE:
            
            return Object.assign({}, state, {[action.userProfile.id]: action.userProfile});
        case RECEIVE_BOARD:
            state[action.board.user.id].boards = Object.assign({}, state[action.board.user.id].boards, {[action.board.id]: action.board});
            debugger
            // Object.assign({}, state, { [action.board.user.id]: action.board.user });
            return state;
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
        case RECEIVE_FOLLOW:
            const newState = Object.assign({}, state);
            newState[action.follow.current_user.id] = action.follow.current_user;
            newState[action.follow.current_profile.id] = action.follow.current_profile;
            
            return newState; 
        case UNFOLLOW:
            const updateState = Object.assign({}, state);
            updateState[action.follow.current_user.id] = action.follow.current_user;
            updateState[action.follow.current_profile.id] = action.follow.current_profile;
            
            return updateState;   
        default:
            return state;
    }
}

export default userReducer;
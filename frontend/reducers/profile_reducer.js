import {  RECEIVE_PROFILE } from "../actions/board_actions";

const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PROFILE:
            return action.userProfile.email;
        default:
            return state;
    }
}

export default profileReducer;



import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser.username })
        default:
            return state;
    }
}

export default userReducer;
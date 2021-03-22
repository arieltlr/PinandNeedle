import { RECEIVE_ERRORS, RECEIVE_PIN } from '../actions/pin_actions';

const pinErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIN:
            return [];
        case RECEIVE_ERRORS:
            debugger
            return action.errors;
        default:
            return state;
    }
}

export default pinErrorsReducer;
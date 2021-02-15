import { RECEIVE_ERRORS, RECEIVE_BOARD } from '../actions/board_actions';

const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD:
            return [];
        case RECEIVE_ERRORS:
            debugger
            return state.errors.append(action.errors);
        default:
            return state;
    }
}

export default boardErrorsReducer;
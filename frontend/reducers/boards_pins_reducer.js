import { RECEIVE_BOARDS_PINS_ASSOC, } from '../actions/boards_pins_actions';

const boardsPinsReducer = (state = false, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BOARDS_PINS_ASSOC:
            return action.boardsPins.savedPin;
        default:
            return state;
    }
}

export default boardsPinsReducer;
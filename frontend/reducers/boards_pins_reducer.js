import { RECEIVE_BOARDS_PINS_ASSOC, } from '../actions/boards_pins_actions';
import { RECEIVE_PIN, SHOW_PIN } from '../actions/pin_actions';

const boardsPinsReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARDS_PINS_ASSOC:
            return Object.assign({}, action.boardsPins);
        case RECEIVE_PIN:
            return false;
        case SHOW_PIN:
            return false;
        default:
            return state;
    }
}

export default boardsPinsReducer;
import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD, RECEIVE_ERRORS } from "../actions/board_actions";

const boardsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BOARDS:
            debugger
            return action.boards;
        case RECEIVE_BOARD:
            debugger
            return Object.assign({}, state, { [action.board.id]: action.board })
        case REMOVE_BOARD:
            const newState = Object.assign({}, state);
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
}

export default boardsReducer;

import * as BoardsPinsAPIUtil from '../util/boards_pins_api_util';

export const RECEIVE_BOARDS_PINS_ASSOC = "RECEIVE_BOARDS_PINS_ASSOC";

export const receiveBoardsPinsAssoc = (boardsPins) => {
    debugger
    return {
        type: RECEIVE_BOARDS_PINS_ASSOC,
        boardsPins
    }
}

export const createAssoc = (boardsPins) => {
    debugger
    return dispatch => {
        return BoardsPinsAPIUtil.boardsPins(boardsPins)
            .then((boardsPins) =>
                dispatch(receiveBoardsPinsAssoc(boardsPins)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
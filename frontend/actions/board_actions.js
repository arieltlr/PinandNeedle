import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveBoards = (boards) => {
    return {
        type: RECEIVE_BOARDS,
        boards
    }
}
export const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    }
}
export const removeBoard = (boardId) => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}
export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const getBoards = () => {
    return dispatch => {
        return BoardAPIUtil.boardIndex()
        .then((boards) =>
            dispatch(receiveBoards(boards)), 
            (errors) =>
                dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const getBoard = (board) => {
    return dispatch => {
        return BoardAPIUtil.showBoard(board)
            .then((board) =>
                dispatch(receiveBoard(board)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const createBoard = (board) => {
    return dispatch => {
        return BoardAPIUtil.newBoard(board)
            .then((board) =>
                dispatch(receiveBoard(board)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const updateBoard = (board) => {
    return dispatch => {
        return BoardAPIUtil.updateBoard(board)
            .then((board) =>
                dispatch(receiveBoard(board)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const deleteBoard = (boardId) => {
    return dispatch => {
        return BoardAPIUtil.destroyBoard(boardId)
            .then((board) =>
                dispatch(removeBoard(board)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
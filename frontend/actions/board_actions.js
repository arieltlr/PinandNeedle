import * as BoardAPIUtil from '../util/board_api_util';
import { userShow } from '../util/user_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveBoards = (userProfile) => {
    return {
        type: RECEIVE_PROFILE,
        userProfile
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

export const getBoards = (userId) => {
    return dispatch => {
        return userShow(userId)
        .then((userProfile) =>
            dispatch(receiveBoards(userProfile)), 
            (errors) =>
                dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const getBoard = (boardId) => {
    return dispatch => {
        return BoardAPIUtil.showBoard(boardId)
            .then((board) =>
                dispatch(receiveBoard(board)),
                (errors) =>
                    dispatch(receiveErrors(errors.responseJSON)));
    }
}
export const createBoard = (board) => {
    // debugger
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
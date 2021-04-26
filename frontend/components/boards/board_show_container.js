import React from 'react';
import { connect } from 'react-redux';
import BoardShow from './board_show';
import { receiveErrors, updateBoard, getBoard } from '../../actions/board_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.boards,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board: state.entities.boards[ownProps.match.params.boardId],
        users: state.entities.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateBoard: (board) => dispatch(updateBoard(board)),
        getBoard: (boardId) => dispatch(getBoard(boardId)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),
        getPins: () => dispatch(getPins())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardShow));
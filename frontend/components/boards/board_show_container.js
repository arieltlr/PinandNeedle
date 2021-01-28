import React from 'react';
import { connect } from 'react-redux';
import BoardShow from './board_show';
import { receiveErrors, updateBoard, getBoard } from '../../actions/board_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    
    debugger
    return {
        errors: state.errors.boards,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board: state.entities.boards
    }
}
const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        updateBoard: (board) => dispatch(updateBoard(board)),
        getBoard: (boardId) => dispatch(getBoard(boardId)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
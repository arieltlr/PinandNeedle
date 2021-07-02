import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import CreatePin from './create_pin';
import { receiveErrors, getPins, getPin, createPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { getBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    let boardId;
    let boards;
    let board_id;
    let board_name;
    let board;
    if (state.entities.user[state.session.id].boards){
        boardId = Object.keys(state.entities.user[state.session.id].boards)[0];
    } else {
        boardId = "";
        board_id = "";
        board_name = "";
    } 
    
    if (Object.values(state.entities.boards).length === 0 && !state.entities.user[state.session.id].boards ){
        boards = {}  
    } else if (Object.values(state.entities.boards).length === 0){
        boards = state.entities.user[state.session.id].boards;
        board = boards[boardId];
        board_name = board.name;
        board_id = board.id;
        
    } else {
        boards = state.entities.boards;
        board = boards[boardId];
        board_name = board.name;
        board_id = board.id;
    }
    debugger
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board_name: board_name,
        board_id: board_id,
        pins: state.entities.pins,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPin: (pin) => dispatch(createPin(pin)),
        updatePin: (pin) => dispatch(updatePin(pin)),
        getPin: (pinId) => dispatch(getPin(pinId)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),
        getPins: () => dispatch(getPins()),
        getBoards: userId => dispatch(getBoards(userId)),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePin));
import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import PinSave from './pin_save';
import { receiveErrors, getPins, getPin, createPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let board;
    if (Object.values(state.entities.boards).length === 0){
        board = savedPin.board;
    } else {
        board = Object.values(state.entities.pins).reverse()[0].board;
    }
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board: board,
        email: state.entities.profile,
        pins: state.entities.pins,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPin: (pinId) => dispatch(getPin(pinId)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        getPins: () => dispatch(getPins()),
        getBoards: userId => dispatch(getBoards(userId)),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinSave));
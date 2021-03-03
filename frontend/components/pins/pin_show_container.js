import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import PinShow from './pin_show';
import { receiveErrors, getPins, getPin, createPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board: state.entities.pins.board,
        userBoards: state.entities.boards,
        email: state.entities.profile,
        pin: state.entities.pins,

    }
}
const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        getPin: (pinId) => dispatch(getPin(pinId)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        getPins: () => dispatch(getPins()),
        getBoards: userId => dispatch(getBoards(userId)),
        getPin: (pinId) => dispatch(getPin(pinId))

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));
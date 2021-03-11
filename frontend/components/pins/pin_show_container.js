import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import PinShow from './pin_show';
import { receiveErrors, getPins, getPin, createPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { createAssoc } from '../../actions/boards_pins_actions'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        pin: state.entities.pins,
        board: state.entities.boards,
        user: state.entities.user,
        pinSaved: state.entities.pinSaved,

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
        getPin: (pinId) => dispatch(getPin(pinId)),
        createPin: (pin) => dispatch(createPin(pin)),
        createAssoc: (boardPin) => dispatch(createAssoc(boardPin))

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));
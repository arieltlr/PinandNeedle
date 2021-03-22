import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import EditPinsBoard from './edit_pins_board';
import { receiveErrors, getPin, updatePin, deletePin, removeBoardsPin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let pinId=ownProps.history.location.pathname.slice(5)
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        pin: state.entities.pins[pinId],
        boards: state.entities.user[state.session.id].boards
    }
}
const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        getPin: (pinId) => dispatch(getPin(pinId)),
        updatePin: (pin) => dispatch(updatePin(pin)),
        deletePin: (pinId) => dispatch(deletePin(pinId)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        removeBoardsPin: (pin) => dispatch(removeBoardsPin(pin))

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPinsBoard));
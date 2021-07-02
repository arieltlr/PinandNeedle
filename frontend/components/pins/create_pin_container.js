import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import CreatePin from './create_pin';
import { receiveErrors, getPins, getPin, createPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { getBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    const boardId = parseInt(ownProps.location.pathname.slice(7));
    debugger
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board_id: state.entities.boards[boardId].id,
        board_name: state.entities.boards[boardId].name,
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
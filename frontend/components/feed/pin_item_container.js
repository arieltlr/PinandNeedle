import React from 'react';
import { connect } from 'react-redux';
import PinItem from './pin_item';
import { receiveErrors, logout } from '../../actions/session_actions';
import { getPins } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';
import { createAssoc } from '../../actions/boards_pins_actions';


const mapStateToProps = (state, ownProps) => {
    let savedPin;
    let savedBoardId;
    let savedBoardName;
    if (ownProps.pin.id === state.entities.pinSaved.pin_id && state.entities.pinSaved.savedPin){
        savedPin = true;
        savedBoardId = state.entities.pinSaved.board_id;
        savedBoardName = state.entities.pinSaved.name;
    } else {
        savedPin = false;
        savedBoardId = null;
        savedBoardName = null;
    }
    return {
        pinSaved: savedPin,
        savedBoardId: savedBoardId,
        key: ownProps.index,
        pin: ownProps.pin,
        profileLetter: ownProps.profileLetter,
        emailName: ownProps.emailName,
        propPins: ownProps.propPins,
        currentUser: state.entities.user[state.session.id],
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getPins: () => dispatch(getPins()),
        receiveErrors: error => dispatch(receiveErrors(error)),
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal)),
        createAssoc: (assoc) => dispatch(createAssoc(assoc)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinItem);
import React from 'react';
import { connect } from 'react-redux';
import Feed from './feed';
import { receiveErrors, logout } from '../../actions/session_actions';
import { getPins } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';
import { createAssoc } from '../../actions/boards_pins_actions';


const mapStateToProps = (state, ownProps) => {
    
    return {
        user: state.entities.user[state.session.id],
        pins: state.entities.pins,
        pinSaved: state.entities.pinSaved,
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
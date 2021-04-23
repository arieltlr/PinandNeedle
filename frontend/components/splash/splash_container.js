import React from 'react';
import { connect } from "react-redux";
import Splash from './splash';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from "../../actions/session_actions";


const mstp = (state, ownProps) => {
    return {
        currentUser: state.entities.user[state.session.id]
    }
}
const mdtp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),

    }
}

export default connect(mstp, mdtp)(Splash);
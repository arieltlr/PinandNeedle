import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { receiveErrors, signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'signup',
        ownProps,
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(signup(user)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button className="otherFormButton" onClick={() => dispatch(openModal('login'))}>
                Already a member? Log in
            </button>
        ),
        refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
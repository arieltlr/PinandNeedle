import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { receiveErrors, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors.session,
        formType: 'login',
        ownProps,
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        login: (user) => dispatch(login(user)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button className="otherFormButton" onClick={()=> dispatch(openModal('signup'))}>
                Not on Pin and Needle yet? Sign up
            </button>
        ) 
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
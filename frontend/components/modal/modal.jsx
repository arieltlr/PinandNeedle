import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

function Modal ({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            // debugger
            component = <LoginFormContainer />;
            break;
        case 'signup':
            // debugger
            component = <SignupFormContainer />;
            break;
        default:
            // debugger
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className="modal-child" onClick={e=> e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mstp = state => {
    return {
        modal: state.ui.modal
    }

}
const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mstp, mdtp)(Modal);
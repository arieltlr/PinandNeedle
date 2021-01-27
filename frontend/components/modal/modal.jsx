import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewBoardFormContainer from '../boards/new_board_form_container';

function Modal ({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    let form;
    switch (modal) {
        case 'login':
            // debugger
            component = <LoginFormContainer />
            form = 'login-modal';
            break;
        case 'signup':
            // debugger
            component = <SignupFormContainer />;
            form = 'signup-modal';
            break;
        case 'createBoard':
            // debugger
            component = <NewBoardFormContainer />;
            form = "create-board-modal"
            break;
        default:
            // debugger
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className={form} onClick={e=> e.stopPropagation()}>
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
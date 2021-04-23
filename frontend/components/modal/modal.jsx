import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewBoardFormContainer from '../boards/new_board_form_container';
import EditBoardContainer from '../boards/edit_board_container';
import DeleteBoardContainer from '../boards/delete_board_container';
import {withRouter} from 'react-router-dom';
import CreatePinContainer from '../pins/create_pin_container';
import PinSaveContainer from '../pins/pin_save_container';
import EditPinContainer from '../pins/edit_pin_container';
import EditPinsBoardContainer from '../pins/edit_pins_board_container';
import CreatePinFromProfileContainer from '../pins/create_pin_from_profile_container';



function Modal ({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    let form;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />
            form = 'login-modal';
            break;
        case 'signup':
            component = <SignupFormContainer />;
            form = 'signup-modal';
            break;
        case 'createBoard':
            component = <NewBoardFormContainer />;
            form = "create-board-modal"
            break;
        case 'edit-board':
            component = <EditBoardContainer />;
            form = "edit-board-modal"
            break;
        case 'delete-board':
            component = <DeleteBoardContainer />;
            form = "delete-board-modal"
            break;
        case 'create-pin':
            component = <CreatePinContainer />;
            form = "create-pin-modal"
            break;
        case 'create-pin-from-profile':
            component = <CreatePinFromProfileContainer />;
            form = "create-pin-modal"
            break;
        case 'pin-save':
            component = <PinSaveContainer />;
            form = "create-pin-modal"
            break;
        case 'edit-pin':
            component = <EditPinContainer />;
            form = "edit-pin-modal"
            break;
        case 'edit-pinsBoard':
            component = <EditPinsBoardContainer />;
            form = "edit-pin-modal"
            break;
        default:
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

export default withRouter(connect(mstp, mdtp)(Modal));
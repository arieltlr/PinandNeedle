import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { receiveErrors, signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        errors: state.errors.session,
        formType: 'signup',
        ownProps,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signup: (user) => dispatch(signup(user)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
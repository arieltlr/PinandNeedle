import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors.session,
        formType: 'login',
        ownProps,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        login: (user) => dispatch(login(user)),
        receiveErrors: error => dispatch(receiveErrors(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
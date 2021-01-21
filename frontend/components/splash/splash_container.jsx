import { connect } from "react-redux";
import Splash from './splash';
import {logout, signup, login} from '../../actions/session_actions'

const mstp = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.user[state.session.id]
    }
}
const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))

    }
}

export default connect(mstp, mdtp)(Splash);
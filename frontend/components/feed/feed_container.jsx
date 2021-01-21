import { connect } from 'react-redux';
import Feed from './feed';
import { receiveErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.user.username
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        receiveErrors: error => dispatch(receiveErrors(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
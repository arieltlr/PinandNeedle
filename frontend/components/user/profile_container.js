import { connect } from 'react-redux';
import Profile from './profile';
import { receiveErrors} from '../../actions/board_actions';
import { getBoards } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        theCurrentUser: state.entities.user[state.session.id],
        thisProfile: ownProps.match.params.userId,
        email: state.entities.profile,
        boards: Object.values(state.entities.boards)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveErrors: error => dispatch(receiveErrors(error)),
        getBoards: userId => dispatch(getBoards(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
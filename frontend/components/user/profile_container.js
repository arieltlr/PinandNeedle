import { connect } from 'react-redux';
import Profile from './profile';
import { receiveErrors} from '../../actions/board_actions';
import { getBoards } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createFollow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        currentUser: state.entities.user[state.session.id],
        currentProfile: state.entities.user[ownProps.match.params.userId],
        email: state.entities.profile,
        boards: Object.values(state.entities.boards), 
        pins: state.entities.pins
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveErrors: error => dispatch(receiveErrors(error)),
        getBoards: userId => dispatch(getBoards(userId)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        unfollow: (unfollow) => dispatch(unfollow(unfollow)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
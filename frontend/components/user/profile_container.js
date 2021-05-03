import { connect } from 'react-redux';
import Profile from './profile';
import { receiveErrors} from '../../actions/board_actions';
import { getBoards } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createFollow, unfollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
    let currentProfileFollowers = {};
    let currentProfileBoards = {};
    if (state.entities.user[ownProps.match.params.userId]){
        
        currentProfileFollowers = state.entities.user[ownProps.match.params.userId].followers;
        if (state.entities.user[ownProps.match.params.userId].boards){
            currentProfileBoards = state.entities.user[ownProps.match.params.userId].boards;
        }
        
    }
    
    return {
        currentUser: state.entities.user[state.session.id],
        currentProfile: state.entities.user[ownProps.match.params.userId],
        currentProfileFollowers: currentProfileFollowers,
        email: state.entities.profile,
        currentProfileBoards: currentProfileBoards, 
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
        unfollow: (follow) => dispatch(unfollow(follow)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
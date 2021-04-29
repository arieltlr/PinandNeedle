import React from 'react';
import { connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import Followers from './followers';
import { createFollow, unfollow } from '../../actions/follow_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { getBoards } from '../../actions/board_actions';


const mapStateToProps = (state, ownProps) => {
    let userId=ownProps.history.location.pathname.slice(6)
    debugger
    return {
        errors: state.errors.pins,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        currentProfile: state.entities.user[userId],
        email: state.entities.profile,
        userId: parseInt(userId),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        unfollow: (follow) => dispatch(unfollow(follow)),
        getBoards: userId => dispatch(getBoards(userId)),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Followers));
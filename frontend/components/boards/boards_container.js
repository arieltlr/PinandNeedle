import React from 'react';
import { connect } from 'react-redux';
import Boards from './boards';
import { receiveErrors, logout } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    const currentProfile = ownProps.match.params.id
    return {
        currentUser: state.entities.user[state.session.id],
        currentUserBoards: state.entities.boards[state.session.id],
        currentProfileBoards: state.entities.boards[currentProfile],
        // pins: state.entities.pins
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveErrors: error => dispatch(receiveErrors(error)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
import React from 'react';
import { connect } from 'react-redux';
import Following from './following';
import { receiveErrors, logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        user: state.entities.user[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        receiveErrors: error => dispatch(receiveErrors(error)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);
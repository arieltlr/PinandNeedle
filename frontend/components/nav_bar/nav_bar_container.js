import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { receiveErrors, logout } from '../../actions/session_actions';
import { searchPins } from '../../actions/pin_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.user[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        receiveErrors: error => dispatch(receiveErrors(error)),
        logout: () => dispatch(logout()),
        searchPins: (search) => dispatch(searchPins(search))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
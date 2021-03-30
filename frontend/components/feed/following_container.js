import React from 'react';
import { connect } from 'react-redux';
import Following from './following';
import { receiveErrors, logout } from '../../actions/session_actions';
import { getPins } from '../../actions/pin_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.user[state.session.id],
        pins: state.entities.pins
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        receiveErrors: error => dispatch(receiveErrors(error)),
        logout: () => dispatch(logout()),
        getPins: () => dispatch(getPins()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);
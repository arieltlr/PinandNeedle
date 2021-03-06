import React from 'react';
import { connect } from 'react-redux';
import Boards from './boards';
import { receiveErrors, logout } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
    const userProfile = ownProps.match.params.id
    return {
        boards: state.entities.boards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveErrors: error => dispatch(receiveErrors(error)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
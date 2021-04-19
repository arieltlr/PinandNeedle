import { connect } from 'react-redux';
import NewBoardForm from './new_board_form';
import { receiveErrors, createBoard, getBoards } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors.boards,
        ownProps,
        currentUser: state.entities.user[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        getBoards: () => dispatch(getBoards()),
        refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewBoardForm));
import { connect } from 'react-redux';
import EditBoard from './edit_board';
import { receiveErrors, updateBoard, getBoard, deleteBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        errors: state.errors.boards,
        ownProps,
        currentUser: state.entities.user[state.session.id],
        board: state.entities.boards
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        getBoard: (boardId) => dispatch(getBoard(boardId)),
        updateBoard: (board) => dispatch(updateBoard(board)),
        receiveErrors: error => dispatch(receiveErrors(error)),
        closeModal: () => dispatch(closeModal()),
        refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard);
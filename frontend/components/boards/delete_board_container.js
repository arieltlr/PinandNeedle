import { connect } from 'react-redux';
import DeleteBoard from './edit_board';
import { deleteBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.entities.boards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        openModal: (modal) => dispatch(openModal(modal)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoard);
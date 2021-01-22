import { OPEN_MODAL, CLOSE_MODAL, ERROR_MODAL} from '../actions/modal_actions';

const modalReducer = (state=null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        // case ERROR_MODAL:
        //     return action.modal;
        default:
            return state;
    }
}

export default modalReducer;
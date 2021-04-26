import { RECEIVE_SEARCH } from '../actions/pin_actions';

const _nullSearch = {}

const searchReducer = (state = _nullSearch, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SEARCH: 
            return action.results;
        default:
            return state;
    }
};

export default searchReducer;
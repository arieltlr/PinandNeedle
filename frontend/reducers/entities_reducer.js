import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import boardsReducer from './boards_reducer';

const entitiesReducer = combineReducers({
    user: userReducer,
    boards: boardsReducer,
})

export default entitiesReducer;

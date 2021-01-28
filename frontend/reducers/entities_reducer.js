import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import boardsReducer from './boards_reducer';
import profileReducer from './profile_reducer';

const entitiesReducer = combineReducers({
    user: userReducer,
    boards: boardsReducer,
    profile: profileReducer
})

export default entitiesReducer;

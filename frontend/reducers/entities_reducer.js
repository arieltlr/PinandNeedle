import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import boardsReducer from './boards_reducer';
import profileReducer from './profile_reducer';
import pinsReducer from "./pins_reducer";
import boardsPinsReducer from "./boards_pins_reducer";
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    user: userReducer,
    boards: boardsReducer,
    profile: profileReducer,
    pins: pinsReducer,
    pinSaved: boardsPinsReducer,
    search: searchReducer
})

export default entitiesReducer;

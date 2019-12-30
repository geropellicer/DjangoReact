import editModeReducer from './editMode';
import removeModeReducer from './removeMode';
import authReducer from './auth';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    editMode: editModeReducer,
    removeMode: removeModeReducer,
    auth: authReducer,
});

export default allReducers;
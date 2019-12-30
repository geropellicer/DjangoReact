import editModeReducer from './editMode';
import removeModeReducer from './removeMode';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    editMode: editModeReducer,
    removeMode: removeModeReducer,
});

export default allReducers;
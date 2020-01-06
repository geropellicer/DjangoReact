import editModeReducer from './editMode';
import removeModeReducer from './removeMode';
import authReducer from './auth';
import personasTabsReducer from './personasTabs';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    editMode: editModeReducer,
    removeMode: removeModeReducer,
    auth: authReducer,
    personasTabs: personasTabsReducer
});

export default allReducers;
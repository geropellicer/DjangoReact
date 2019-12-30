import {
    ACTIVATE_EDIT,
    DEACTIVATE_EDIT,
    TOGGLE_EDIT
} from '../actions/types';

const editModeReducer = (state = false, action) => {
    switch(action.type) {
        case ACTIVATE_EDIT:
            return true;
        case DEACTIVATE_EDIT:
            return false;
        case TOGGLE_EDIT:
            return !state;
        default:
            return state;
    }
}

export default editModeReducer;
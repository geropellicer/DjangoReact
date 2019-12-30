import {
    ACTIVATE_REMOVE,
    DEACTIVATE_REMOVE,
    TOGGLE_REMOVE,
} from '../actions/types';

const removeModeReducer = (state = false, action) => {
    switch(action.type) {
        case ACTIVATE_REMOVE:
            return true;
        case DEACTIVATE_REMOVE:
            return false;
        case TOGGLE_REMOVE:
            return !state;
        default:
            return state;
    }
}

export default removeModeReducer;
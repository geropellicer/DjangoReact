const removeModeReducer = (state = false, action) => {
    switch(action.type) {
        case 'ACTIVATEREMOVE':
            return true;
        case 'DEACTIVATEREMOVE':
            return false;
        case 'TOGGLEREMOVE':
            return !state;
        default:
            return state;
    }
}

export default removeModeReducer;
const editModeReducer = (state = false, action) => {
    switch(action.type) {
        case 'ACTIVATEEDIT':
            return true;
        case 'DEACTIVATEEDIT':
            return false;
        case 'TOGGLEEDIT':
            return !state;
        default:
            return state;
    }
}

export default editModeReducer;
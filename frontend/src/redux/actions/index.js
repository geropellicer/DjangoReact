import {
    GET_ERRORS,
    ACTIVATE_EDIT,
    DEACTIVATE_EDIT,
    TOGGLE_EDIT,
    ACTIVATE_REMOVE,
    DEACTIVATE_REMOVE,
    TOGGLE_REMOVE,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './types';

export const returnErrors = (msg, status) => {
    return{
        type: GET_ERRORS,
        payload: {msg, status}
    }
}

export const activateEdit = () => {
    return{
        type: ACTIVATE_EDIT
    };
};

export const deactivateEdit = () => {
    return{
        type: DEACTIVATE_EDIT
    };
};

export const toggleEdit = () => {
    return{
        type: TOGGLE_EDIT
    };
};

export const activateRemove = () => {
    return{
        type: ACTIVATE_REMOVE
    };
};

export const deactivateRemove = () => {
    return{
        type: DEACTIVATE_REMOVE
    };
};

export const toggleRemove = () => {
    return{
        type: TOGGLE_REMOVE
    };
};

export const userLoading = () => {
    return {
        type: USER_LOADING
    }
}

export const userLoaded = (userData) => {
    return {
        type: USER_LOADED,
        payload: userData
    }
}

export const authError = () => {
    return {
        type: AUTH_ERROR
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
    }
}
import {userLoading, userLoaded, authError} from '../actions'
import {
    GET_ERRORS,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT
} from '../actions/types';
import apiService from '../../config/apiService';
const initialState = {
    token: localStorage.getItem('authToken'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(state){
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('authToken');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        case LOGOUT:
            console.log('sucediendo');
            localStorage.removeItem('authToken');
            apiService('rest-auth/logout/', 'POST');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
};

export default authReducer;
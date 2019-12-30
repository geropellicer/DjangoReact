import {
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
    switch(action.type){
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
            apiService('rest-auth/logout/', 'POST');
            localStorage.removeItem('authToken');
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
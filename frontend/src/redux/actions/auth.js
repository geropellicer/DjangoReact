import BASEURL from '../../config/baseurl';
import {CSRF_TOKEN} from '../../config/csrf_token';
import {returnErrors, userLoading, userLoaded, authError, loginSuccess} from './index';
import apiService from '../../config/apiService';

export const loadUser = async (dispatch, token) => {
    //userLoading
    dispatch(userLoading());

    const config = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': CSRF_TOKEN,
        }
    };
    //load user
    if(token){
        config.headers.Authorization = `Token ${token}`;
    }
    
    try {
        const response = await fetch(`${BASEURL}user`, config);
        const data = await response.json();
        if(data.detail === null || data.detail === undefined){
            dispatch(userLoaded(data));
        }else{
            dispatch(returnErrors(data.detail, 401));
            dispatch(authError());
        }
    } catch (error) {
        console.log(error); 
    }
}

export const loginUser = async(dispatch, username, password) => {
    const ENDPOINT = 'rest-auth/login/';

    const response = await apiService(ENDPOINT, 'POST', {'username': username, 'password': password}, false);
    console.log(response);
    if(response.non_field_errors){
        console.log("casos 1 y 3");
    } 
    if(response.password){
        console.log("caso 2");
    } else {
        dispatch(loginSuccess(response.key));
    }
    // definir y despachar login success o login error
}
import BASEURL from './baseurl';
import {returnErrors, userLoading, userLoaded, authError} from './index';
import {useDispatch, useSelector} from 'react-redux';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from './types';   

export const loadUser = () => {
    const dispatch = useDispatch();
    //userLoading
    dispatch(userLoading());

    //get token from state
    const token = useSelector(state => state.auth.token);

    //load user
    if(token){
        const config = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': CSRF_TOKEN,
                'Authorization': `Token ${token}`,
            }
        };
        
        fetch(`${BASEURL}'user'`, config)
        .then(res => {
            dispatch(userLoaded(res.data));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch(authError);
            console.log(error); 
        })
    }
}
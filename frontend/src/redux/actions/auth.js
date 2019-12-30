import BASEURL from '../../config/baseurl';
import {CSRF_TOKEN} from '../../config/csrf_token';
import {returnErrors, userLoading, userLoaded, authError} from './index';

export const loadUser = (dispatch, token) => {
    //userLoading
    dispatch(userLoading());

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
        
        fetch(`${BASEURL}user`, config)
        .then(res => {
            return res.json();
        })
        .then( (data) => {
            dispatch(userLoaded(data));
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch(authError);
            console.log(error); 
        })
    }
}
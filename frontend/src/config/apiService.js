import {CSRF_TOKEN} from '../config/csrf_token';
import BASEURL from './baseurl';

const handleResponse = (response) => {
  return response.json();
}
    
const apiService = (endpoint, method, data) => {
  // D.R.Y. code to make HTTP requests to the REST API backend using fetch
  const config = {
    method: method || "GET",
    body: data !== undefined ? JSON.stringify(data) : null,
    headers: {
      'content-type': 'application/json',
      'X-CSRFTOKEN': CSRF_TOKEN,
      'Authorization': 'Token ' + window.localStorage.getItem("authToken"),
    }
  };
  console.log(config.headers.Authorization);
  return fetch(`${BASEURL}${endpoint}`, config)
        .then(handleResponse)
        .catch(error => {console.log(error); return error})
}

export default apiService;
import React,{useState} from 'react';
import apiService from '../config/apiService';
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';


const Login = () => {
    const ENDPOINT = 'rest-auth/login/';

    const loggedIn = useSelector(state => state.auth.isAuthenticated);

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const updatePassword = e => {
        setPassword(e.target.value);
    }
    
    const updateUsername = e => {
        setUsername(e.target.value);
    }

    const login = async (e) => {
        e.preventDefault();
        const response = await apiService(ENDPOINT, 'POST', {'username': username, 'password': password}, false);
        window.localStorage.setItem("authToken", response.key);
    };

    return(
        <div className="container verticalAlign columna">
        { loggedIn ? <Redirect to='/'/> : 
            <div className="row">
                <div className="one column"></div>
                <div className="ten columns">
                    <form className="columna loginForm card" onSubmit={login}>
                        <h1>Ingresar</h1>
                        <input onChange={updateUsername} autoComplete="current-username" value={username} type="text" name="username"/>
                        <input onChange={updatePassword} autoComplete="current-password" value={password} type="password" name="password"/>
                        <input className="button-primary" type="submit" value="Log in"/>
                    </form>
                </div>
                <div className="one column"></div>
            </div>
        }
        </div>
    )
}

export default Login;
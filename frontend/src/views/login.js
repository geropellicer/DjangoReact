import React,{useState} from 'react';
import { Redirect } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { loginUser } from '../redux/actions/auth';


const Login = () => {
    const dispatch = useDispatch();

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
        await loginUser(dispatch, username, password);
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
import React from 'react';
import {Link} from 'react-router-dom';
import TopMenu from './topMenu';
import {useSelector} from 'react-redux';
 
const Nav = () => {

    const loggedIn = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user); 

    return(
        <header className="mainHeader">
            <nav>
                {
                    loggedIn ?
                    <Link to='./'>
                    <button className="back">
                       <ion-icon name="arrow-round-back"></ion-icon> Atrás
                    </button>
               </Link>
                    : null
                }
            </nav>


            <Link to="/">
                <h5>ADMIN</h5>
            </Link>

            <nav className="fila">
                {
                    user ?
                    <span>Bienvenido {user.username}</span>
                    : null
                }
                {
                loggedIn ?
                <TopMenu/>
                : null
                }
            </nav>
        </header>
    );
};

export default Nav;
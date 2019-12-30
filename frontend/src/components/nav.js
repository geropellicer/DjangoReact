import React from 'react';
import {Link} from 'react-router-dom';
import TopMenu from './topMenu';
import {useSelector} from 'react-redux';
 
const Nav = () => {

    const loggedIn = useSelector(state => state.auth.isAuthenticated) 

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
                <h4>ADMIN PTS</h4>
            </Link>

            <nav>
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
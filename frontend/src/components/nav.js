import React from 'react';
import {Link} from 'react-router-dom';
import TopMenu from './topMenu';

const Nav = () => {
    return(
        <header className="mainHeader">
            <nav>
                <Link to='./'>
                    <button className="back">
                       <ion-icon name="arrow-round-back"></ion-icon> Atrás
                    </button>
               </Link>
            </nav>


            <Link to="/">
                <h4>ADMIN PTS</h4>
            </Link>

            <nav>
               <TopMenu/>
            </nav>
        </header>
    );
};

export default Nav;
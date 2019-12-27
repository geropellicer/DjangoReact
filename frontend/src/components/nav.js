import React from 'react';
import {Link} from 'react-router-dom';
import TopMenu from './topMenu';

const Nav = () => {
    return(
        <header className="mainHeader">
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
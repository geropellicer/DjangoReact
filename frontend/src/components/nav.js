import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <header className="mainHeader">
            <Link to="/">
                <h2>Admin PTS</h2>
            </Link>

            <nav>
                <ul>
                    <li>
                        Un item
                    </li>
                    <li>
                        Otro item
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
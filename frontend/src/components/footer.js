import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="mainFooter">
            <h5>ADMIN PTS</h5>

            <nav>
                <Link to='/'>
                    Volver a inicio
                </Link>
                <Link to='/logout'>
                    Cerrar sesión
                </Link>
            </nav>

            <h6>Actualizado al 2020</h6>
        </footer>
    );
};

export default Footer;
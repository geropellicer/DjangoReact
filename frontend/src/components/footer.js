import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions';

const Footer = () => {
    const dispatch = useDispatch();
    const closeSession = () => {
        dispatch(logout());
    }

    return(
        <footer className="mainFooter">
            <h5>ADMIN</h5>

            <nav>
                <Link to='/'>
                    <button>
                        Volver a inicio
                    </button>
                </Link>
                <button onClick={closeSession}>
                    Cerrar sesión
                </button>
            </nav>

            <h6>Actualizado al 2020</h6>
        </footer>
    );
};

export default Footer;
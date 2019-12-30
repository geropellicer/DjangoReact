import React from 'react';
import {useSelector} from 'react-redux';

const Mapa = () => {
    const loggedIn = useSelector(state => state.auth.isAuthenticated);

    return(
        <div>
            { loggedIn ? (
                <div className="mapa fila container">

                    <h6>Mapa works</h6>
                
            </div>) : null
            }
        </div>
    )
};

export default Mapa;
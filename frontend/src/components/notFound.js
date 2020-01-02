import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return(
        <div className="cotainer doubleCenter">
            <div className="card columna">
                <h1 className="bold">Error 404</h1>
                <h1>Pagina no encontrada!</h1>
                <Link to="/"> Volver a inicio </Link>
            </div>
        </div>
    );
}

export default NotFound;
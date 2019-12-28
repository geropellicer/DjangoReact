import React from 'react';
import {Link} from 'react-router-dom';

const ListHeader = ({titulo, url}) => {

    return(
        <header className="sectionHeader fila">
            <h3>{titulo}</h3>
            <div className="fila">
                <Link to={'/'}>
                    <button className="fila eliminar">
                        <ion-icon name="trash"></ion-icon>
                    </button>
                </Link>
                <Link to={'/'}>
                    <button className="fila editar">
                        <ion-icon name="create"></ion-icon>
                    </button>
                </Link>
                <Link to={url}>
                    <button className="fila agregar">
                        Agregar <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default ListHeader;
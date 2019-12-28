import React from 'react';
import {Link} from 'react-router-dom';

const ListHeader = ({titulo, url}) => {

    return(
        <header className="sectionHeader fila">
            <h3>{titulo}</h3>
            <Link to={url}>
                <button className="fila">
                    Agregar <ion-icon name="add-circle-outline"></ion-icon>
                </button>
            </Link>
        </header>
    );
};

export default ListHeader;
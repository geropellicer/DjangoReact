import React from 'react';

const ListHeader = ({titulo}) => {

    return(
        <header className="sectionHeader fila">
            <h3>{titulo}</h3>
            <button className="fila">
                Agregar <ion-icon name="add-circle-outline"></ion-icon>
            </button>
        </header>
    );
};

export default ListHeader;
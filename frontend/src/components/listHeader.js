import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {EditModeContext} from './editModeContext';
import {RemoveModeContext} from './removeModeContext';

const ListHeader = ({titulo, url}) => {

    const [editMode, setEditMode] = useContext(EditModeContext);
    const [removeMode, setRemoveMode] = useContext(RemoveModeContext);

    const updateEditMode = () => {
        setEditMode(!editMode);
        setRemoveMode(false);
    } 
    const updateRemoveMode = () => {
        setRemoveMode(!removeMode);
        setEditMode(false);
    }

    return(
        <header className="sectionHeader fila">
            <h3>{titulo}</h3>
            <div className="fila">
                <button onClick={updateRemoveMode} className="fila eliminar">
                    <ion-icon name="trash"></ion-icon>
                </button>
                <button onClick={updateEditMode} className="fila editar">
                    <ion-icon name="create"></ion-icon>
                </button>
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
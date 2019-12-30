import React from 'react';
import {Link} from 'react-router-dom';
import {deactivateEdit, toggleEdit, deactivateRemove, toggleRemove} from '../redux/actions';
import {useDispatch} from 'react-redux';

const ListHeader = ({titulo, url}) => {

    const dispatch = useDispatch();

    const updateEditMode = () => {
        dispatch(toggleEdit());
        dispatch(deactivateRemove());
    } 
    const updateRemoveMode = () => {
        dispatch(toggleRemove());
        dispatch(deactivateEdit());
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
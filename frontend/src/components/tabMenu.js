import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEventosTab, selectAportesTab } from '../redux/actions';

const TabMenu = () => {

    const dispatch = useDispatch();

    const estadoTabs = useSelector(state => state.personasTabs);

    const activarEventos = () => {
        dispatch(selectEventosTab());
    }
    const activarAportes = () => {
        dispatch(selectAportesTab());
    }

    return(
        <nav className="tabMenu fila">
            <button onClick={activarEventos} className={estadoTabs.eventos ? 'activo' : ''}>
                Eventos
            </button>
            <button onClick={activarAportes} className={estadoTabs.aportes ? 'activo' : '' }>
                Aportes
            </button>
        </nav>
    );
};

export default TabMenu;
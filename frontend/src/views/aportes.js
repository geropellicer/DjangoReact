import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';

import ListHeader from '../components/listHeader';

const Aportes = () => {
    const ENDPOINT = 'aportes';

    const columnas = ['ID', 'Persona', 'Monto', 'Fecha', 'Tipo'];
    const refColumnas = ['id', 'persona', 'monto', 'fecha', 'tipoAporte'];
    const refPropsColumnas = ['', 'nombre', '', '', 'nombre'];
    const linkBase = '/aportes';
    const alineacionesColumnas = ['c', 'l', 'c', 'c', 'c'];

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await apiService(ENDPOINT, 'GET');
            setData(response);
        }
        getData();
    }, [])

    return(
        <div className="main container">
            <ListHeader titulo="Aportes" url='/aportes/agregar' />
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default Aportes;
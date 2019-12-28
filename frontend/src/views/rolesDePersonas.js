import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';
import ListHeader from '../components/listHeader';

const RolesDePersonas = () => {
    const ENDPOINT = 'roles-de-personas';

    const columnas = ['ID', 'Nombre', 'Descripción', 'Cantidad de personas'];
    const refColumnas = ['id', 'nombre', 'descripcion', 'personas'];
    const refPropsColumnas = ['', '', '', 'length'];
    const linkBase = '/roles-de-personas';
    const alineacionesColumnas = ['c', 'l', 'l', 'c'];

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
            <ListHeader titulo="Roles de personas" url="/roles-de-personas/agregar"/>
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default RolesDePersonas;
import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';
import ListHeader from '../components/listHeader';

const TiposDeEvento = () => {
    const ENDPOINT = 'tipos-de-evento';

    const columnas = ['ID', 'Nombre', 'Cantidad de eventos'];
    const refColumnas = ['id', 'nombre', 'eventos'];
    const refPropsColumnas = ['', '', 'length'];
    const linkBase = '/tipos-de-evento';
    const alineacionesColumnas = ['c', 'l', 'c'];

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
            <ListHeader titulo="Tipos de evento" url='tipos-de-evento/agregar'/>
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default TiposDeEvento;
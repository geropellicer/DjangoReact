import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';
import ListHeader from '../components/listHeader';

const Personas = () => {
    const ENDPOINT = 'personas';

    const columnas = ['ID', 'Nombre', 'Edad', 'Estructura', 'Rol', 'Cant. relaciones', 'Cantidad de eventos'];
    const refColumnas = ['id', 'nombre', 'edad', 'estructura', 'rol', 'relaciones_propias', 'eventos'];
    const refPropsColumnas = ['', '', '', 'nombre', 'nombre', 'length', 'length'];
    const linkBase = '/personas';
    const alineacionesColumnas = ['c', 'l', 'c', 'l', 'c', 'c', 'c'];

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
            <ListHeader titulo="Personas" url="/personas/agregar" />
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default Personas;
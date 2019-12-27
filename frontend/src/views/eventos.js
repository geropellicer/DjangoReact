import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';

const Eventos = () => {
    const ENDPOINT = 'eventos';

    const columnas = ['ID', 'Nombre', 'Tipo', 'Fecha', 'Padrón'];
    const refColumnas = ['id', 'nombre', 'tipo', 'fecha', 'personas'];
    const refPropsColumnas = ['', '', 'nombre', '', 'length'];
    const linkBase = '/eventos';
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
            <header className="sectionHeader">
                <h3>Eventos</h3>
            </header>
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default Eventos;
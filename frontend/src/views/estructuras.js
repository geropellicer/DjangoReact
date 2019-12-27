import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';

const Estructuras = () => {
    const ENDPOINT = 'estructuras';

    const columnas = ['ID', 'Nombre', 'Zona', 'Tipo', 'Cantidad de personas'];
    const refColumnas = ['id', 'nombre', 'zona', 'tipo', 'personas'];
    const refPropsColumnas = ['', '', 'nombre', 'nombre', 'length'];
    const linkBase = '/estructuras';
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
                <h3>Estructuras</h3>
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

export default Estructuras;
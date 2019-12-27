import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';
import DATEOPTIONS from '../config/dateOptions';

const RolDePersona = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `roles-de-personas/${id}`;

    const columnas = ['ID', 'Nombre', 'Edad', 'Estructura', 'Cantidad de eventos'];
    const refColumnas = ['id', 'nombre', 'edad', 'estructura', 'eventos'];
    const refPropsColumnas = ['', '', '', 'nombre', 'length'];
    const linkBase = '/personas';
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
                <h3>{data.nombre}</h3>
            </header>

            <header className="secondary">
                <div>
                    <h5>ID:</h5>
                    <span>{data.id}</span>
                </div>
            </header>

            <header className="secondary tableHeader">
                   <h5> Personas {data.nombre}: </h5>
            </header>

            {data.personas ? (
                <Tabla  columnas={columnas}
                    data={data.personas}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
            ) : null }
        </div>
    );
};

export default RolDePersona;
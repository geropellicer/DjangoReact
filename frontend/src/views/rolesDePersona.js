import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';
import DATEOPTIONS from '../config/dateOptions';

const TipoDeAporte = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `tipos-de-aporte/${id}`;

    const columnas = ['ID', 'Persona', 'Monto', 'Mes'];
    const refColumnas = ['id', 'persona', 'monto', 'mes'];
    const refPropsColumnas = ['', 'nombre', '', 'nombre'];
    const linkBase = '/aportes';
    const alineacionesColumnas = ['c', 'l', 'c', 'c'];

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
                   <h5> Aportes: </h5>
            </header>

            {data.aportes ? (
                <Tabla  columnas={columnas}
                    data={data.aportes}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
            ) : null }
        </div>
    );
};

export default TipoDeAporte;
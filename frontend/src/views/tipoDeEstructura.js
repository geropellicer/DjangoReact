import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';

const TipoDeEstructura = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `tipos-de-estructura/${id}`;

    const columnas = ['ID', 'Nombre', 'Zona', 'Cantidad de eventos'];
    const refColumnas = ['id', 'nombre', 'zona', 'personas'];
    const refPropsColumnas = ['', '', 'nombre', 'length'];
    const linkBase = '/estructuras';
    const alineacionesColumnas = ['c', 'l', 'c', 'c'];

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await apiService(ENDPOINT, 'GET');
            setData(response);
        }
        getData();
    }, [ENDPOINT])
    

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
                   <h5> Estructuras: </h5>
            </header>

            {data.estructuras ? (
                <Tabla  columnas={columnas}
                    data={data.estructuras}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
            ) : null }
        </div>
    );
};

export default TipoDeEstructura;
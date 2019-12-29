import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';
import ItemHeader from '../components/itemHeader';

const Estructura = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `estructuras/${id}`;

    const columnas = ['ID', 'Nombre', 'Edad', 'Cantidad de eventos'];
    const refColumnas = ['id', 'nombre', 'edad', 'eventos'];
    const refPropsColumnas = ['', '', '', 'length'];
    const linkBase = '/personas';
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
            
           <ItemHeader titulo={data.nombre} url={`estructuras/${data.id}`}/>

            <header className="secondary">
                <div>
                    <h5>ID:</h5>
                    <span>{data.id}</span>
                </div>
                { data.zona ? (<div>
                    <h5>Zona:</h5>
                    <span>{data.zona['nombre']}</span>
                </div>) : null}
                { data.zona ? (<div>
                    <h5>Tipo:</h5>
                    <span>{data.tipo['nombre']}</span>
                </div>) : null}
            </header>

            <header className="secondary tableHeader">
                   <h5> Personas en { data.nombre }: </h5>
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

export default Estructura;
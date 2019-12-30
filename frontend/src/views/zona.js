import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';

const Zona = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `zonas/${id}`;

    const columnas = ['ID', 'Nombre', 'Tipo', 'Cantidad de personas'];
    const refColumnas = ['id', 'nombre', 'tipo', 'personas'];
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
                { data.estructuras ? (<div>
                    <h5>Cantidad de estructuras:</h5>
                    <span>{data.estructuras.length}</span>
                </div>) : null}
            </header>

            <header className="secondary tableHeader">
                   <h5> Estructuras en { data.nombre }: </h5>
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

export default Zona;
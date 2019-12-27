import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';
import DATEOPTIONS from '../config/dateOptions';

const TipoDeEvento = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `tipos-de-evento/${id}`;

    const columnas = ['ID', 'Nombre', 'Fecha'];
    const refColumnas = ['id', 'nombre', 'fecha'];
    const refPropsColumnas = ['', '', ''];
    const linkBase = '/eventos';
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

            {data.eventos ? (
                <Tabla  columnas={columnas}
                    data={data.eventos}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
            ) : null }
        </div>
    );
};

export default TipoDeEvento;
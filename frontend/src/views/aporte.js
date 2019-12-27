import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import Tabla from '../components/tabla';
import DATEOPTIONS from '../config/dateOptions';

const Aporte = (props) => {

    const { id } = props.match.params;

    const ENDPOINT = `aportes/${id}`;

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
                <h3>Aporte #{data.id}</h3>
            </header>

            <header className="secondary">
                <div>
                    <h5>ID:</h5>
                    <span>{data.id}</span>
                </div>
                { data.persona ? (<div>
                    <h5>Aporte de:</h5>
                    <span>{data.persona.nombre}</span>
                </div>
                ) : null}
                <div>
                    <h5>Monto:</h5>
                    <span>$ {data.monto}</span>
                </div>
                { data.mes ? (<div>
                    <h5>Mes:</h5>
                    <span>{data.mes.nombre}</span>
                </div>
                ) : null}
            </header>
        </div>
    );
};

export default Aporte;
import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';
import ListHeader from '../components/listHeader';

const Personas = () => {
    const ENDPOINT = 'personas/';
    const ENDPOINT2 = 'eventos/';

    const [columnas, setColumnas] = useState(['ID', 'Nombre', 'Edad', 'Estructura', 'Rol', 'Cant. relaciones', 'Cantidad de eventos']);
    const [refColumnas, setRefColumnas] = useState(['id', 'nombre', 'edad', 'estructura', 'rol', 'relaciones_propias', 'eventos']);
    const [refPropsColumnas, setPropsColumnas] = useState(['', '', '', 'nombre', 'nombre', 'length', 'length']);
    const [alineacionesColumnas, setAlineacionesColumnas] = useState(['c', 'l', 'c', 'l', 'c', 'c', 'c']);
    const linkBase = '/personas';

    
    const [personasDataRaw, setPersonasDataRaw] = useState([]);
    const [personasDataCocinado, setPersonasDataCocinado] = useState([]);
    const [dataEventos, setDataEventos] = useState([]);
    
    
    useEffect(() => {
        const getDataEventos = async () => {
            const response = await apiService(ENDPOINT2, 'GET');
            setDataEventos(response);
        };
        const getPersonasData = async () => {
            const response = await apiService(ENDPOINT, 'GET');
            setPersonasDataRaw(response);
        };
        
        const agregarEventosAColumnas = () => {
            dataEventos.forEach((evento, i) => {
                setColumnas(prevC => [...prevC, `${evento.fecha} - ${evento.nombre}`]);
                setRefColumnas(prevR => [...prevR, `evento${evento.id}`]);
                setPropsColumnas(prevP => [...prevP, '']);
                setAlineacionesColumnas(prevA => [...prevA, 'c']);
            })
        };
        
        const agregarEventosADataPersonas = () => {
            let idPersona = 0;
            let idsPersonasEvento = [];

            personasDataRaw.forEach((persona, i) => {
                idPersona = persona.id;
                
                dataEventos.forEach(evento => {
                    idsPersonasEvento = [];
                    evento.personas.forEach(personaEv => { idsPersonasEvento.push(personaEv.id)  });
                    if(idsPersonasEvento.includes(idPersona)){
                        persona[`evento${evento.id}`] = 'Fue';
                    } else {
                        persona[`evento${evento.id}`] = 'No fue';
                    }
                });
            });

            setPersonasDataCocinado(personasDataRaw);
        };

        
        if(!personasDataRaw.length){
            getPersonasData();
        }
        if(!dataEventos.length){
            getDataEventos();
        }
        
        if(!personasDataCocinado.length){
            agregarEventosAColumnas();
            agregarEventosADataPersonas();
        }
    }, [dataEventos, personasDataCocinado])

    return(    
        <div>
        <div className="main container">
            <ListHeader titulo="Personas" url="/personas/agregar" />
        </div>
            <Tabla  columnas={columnas}
                    data={personasDataCocinado}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default Personas;
import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';
import ListHeader from '../components/listHeader';
import TabMenu from '../components/tabMenu';
import { useSelector } from 'react-redux';
import MESES from '../config/meses';

const Personas = () => {

    const estadoTabs = useSelector(state => state.personasTabs);


    const ENDPOINT = 'personas/';
    const ENDPOINT2 = 'eventos/';
    const ENDPOINT3 = 'aportes/';

    const [columnas1, setColumnas1] = useState(['ID', 'Nombre', 'Edad', 'Estructura', 'Rol', 'Cant. relaciones', 'Cantidad de eventos']);
    const [refColumnas1, setRefColumnas1] = useState(['id', 'nombre', 'edad', 'estructura', 'rol', 'relaciones_propias', 'eventos']);
    const [refPropsColumnas1, setPropsColumnas1] = useState(['', '', '', 'nombre', 'nombre', 'length', 'length']);
    const [alineacionesColumnas1, setAlineacionesColumnas1] = useState(['c', 'l', 'c', 'l', 'c', 'c', 'c']);


    const [columnas2, setColumnas2] = useState(['ID', 'Nombre', 'Edad', 'Estructura', 'Rol', 'Cant. relaciones', 'Cantidad de eventos']);
    const [refColumnas2, setRefColumnas2] = useState(['id', 'nombre', 'edad', 'estructura', 'rol', 'relaciones_propias', 'eventos']);
    const [refPropsColumnas2, setPropsColumnas2] = useState(['', '', '', 'nombre', 'nombre', 'length', 'length']);
    const [alineacionesColumnas2, setAlineacionesColumnas2] = useState(['c', 'l', 'c', 'l', 'c', 'c', 'c']);
    const linkBase = '/personas';

    
    const [personasDataRaw1, setPersonasDataRaw1] = useState([]);
    const [personasDataRaw2, setPersonasDataRaw2] = useState([]);
    const [personasDataCocinado1, setPersonasDataCocinado1] = useState([]);
    const [personasDataCocinado2, setPersonasDataCocinado2] = useState([]);
    const [dataEventos, setDataEventos] = useState([]);
    const [dataAportes, setDataAportes] = useState([]);
    
    
    useEffect(() => {
        const getPersonasData = async () => {
            const response = await apiService(ENDPOINT, 'GET');
            setPersonasDataRaw1(response);
            setPersonasDataRaw2(response);
        };
        const getDataEventos = async () => {
            const response = await apiService(ENDPOINT2, 'GET');
            setDataEventos(response);
        };
        const getDataAportes = async () => {
            const response = await apiService(ENDPOINT3, 'GET');
            setDataAportes(response);
        };
        
        const agregarEventosAColumnas = () => {
            dataEventos.forEach((evento, i) => {
                setColumnas1(prevC => [...prevC, `${evento.fecha} - ${evento.nombre}`]);
                setRefColumnas1(prevR => [...prevR, `evento${evento.id}`]);
                setPropsColumnas1(prevP => [...prevP, '']);
                setAlineacionesColumnas1(prevA => [...prevA, 'c']);
            })
        };

        const agregarAportesAColumnas = () => {
            MESES.forEach((mes, i) => {
                setColumnas2(prevC => [...prevC, mes]);
                setRefColumnas2(prevR => [...prevR, `aportesMes${mes}`]);
                setPropsColumnas2(prevP => [...prevP, '']);
                setAlineacionesColumnas2(prevA => [...prevA, 'c']);
            })
        };
        
        const agregarEventosADataPersonas = () => {
            let idPersona = 0;
            let idsPersonasEvento = [];

            personasDataRaw1.forEach((persona, i) => {
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

            setPersonasDataCocinado1(personasDataRaw1);
        };

        const agregarAportesADataPersonas = () => {
            let idPersona = 0;
            let idsPersonasEvento = [];

            personasDataRaw2.forEach((persona, i) => {
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

            setPersonasDataCocinado2(personasDataRaw2);
        };

        
        if(!personasDataRaw1.length || !personasDataRaw2.length){
            getPersonasData();
        }
        if(!dataEventos.length){
            getDataEventos();
        }
        if(!dataAportes.length){
            getDataAportes();
        }
        
        if(!personasDataCocinado1.length){
            agregarEventosAColumnas();
            agregarEventosADataPersonas();
        }

        if(!personasDataCocinado2.length){
            agregarAportesAColumnas();
            agregarAportesADataPersonas();
        }

    }, [dataEventos, personasDataCocinado1, personasDataCocinado2])

    return(    
        <div>
        <div className="main container">
            <ListHeader titulo="Personas" url="/personas/agregar" />
            <TabMenu/>
        </div>
            { estadoTabs.eventos ? <Tabla  columnas={columnas1}
                    data={personasDataCocinado1}
                    refColumnas={refColumnas1}
                    refPropsColumnas={refPropsColumnas1}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas1}/>
            : null }
            {estadoTabs.aportes ? <Tabla  columnas={columnas2}
                    data={personasDataCocinado2}
                    refColumnas={refColumnas2}
                    refPropsColumnas={refPropsColumnas2}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas2}/>
            :null } 
        </div>
    );
};

export default Personas;
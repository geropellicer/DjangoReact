import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import { useHistory } from "react-router-dom";


const PopUpAdd = (props) => {

    const { elemento } = props.match.params;
    
    const history = useHistory();
    
    const goBack = (e) => {
        if(e.target.className === 'oscuro'){
            history.push("./");
        }
    }
    const manualGoBack = () => {
        history.push("./");
    }



    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Estructura

    const [estructuraNombre, setEstructuraNombre] = useState('');
    const [estructuraZona, setEstructuraZona] = useState('');
    const [estructuraTipo, setEstructuraTipo] = useState('');
    const [zonas, setZonas] = useState([]);
    const [tiposEstructura, setTiposEstructura] = useState([]);

    
    const updateEstructuraNombre = (e) => {
        setEstructuraNombre(e.target.value);
    };
    
    const updateEstructuraZona = (e) => {
        setEstructuraZona(e.target.value);
    };
    
    const updateEstructuraTipo = (e) => {
        setEstructuraTipo(e.target.value);
    };
    
    
    const crearEstructura = async (e) => {
        e.preventDefault();
        const dataNuevaEstructura = {
            nombre: estructuraNombre,
            zona: {nombre: estructuraZona},
            tipo: {nombre: estructuraTipo}
        }
        await apiService('estructuras/', 'POST', dataNuevaEstructura);
        terminar('estructuras');
    }





    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Estructura

    const [aporteMonto, setAporteMonto] = useState('');
    const [personaAporte, setPersonaAporte] = useState('');
    const [fechaAporte, setFechaAporte] = useState('');
    const [tipoAporte, setTipoAporte] = useState('');
    const [tiposAporte, setTiposAporte] = useState([]);
    const [personas, setPersonas] = useState([]);

    
    const updateAporteMonto = (e) => {
        setAporteMonto(e.target.value);
    };
    const updatePersonaAporte = (e) => {
        setPersonaAporte(e.target.value);
    };
    const updateFechaAporte = (e) => {
        setFechaAporte(e.target.value);
    };
    const updateTipoAporte = (e) => {
        setTipoAporte(e.target.value);
    };
    
    const crearAporte = async (e) => {
        e.preventDefault();
        const dataNuevaEstructura = {
            monto: aporteMonto,
            fecha: fechaAporte,
            tipoAporte: {nombre: tipoAporte},
            persona: {nombre: personaAporte.split('|')[0], rol: parseInt(personaAporte.split('|')[1])}
        }
        await apiService('aportes/', 'POST', dataNuevaEstructura);
        terminar('aportes');
    }




    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Evento

    const [eventoNombre, setEventoNombre] = useState('');
    const [fechaEvento, setFechaEvento] = useState('');
    const [tipoEvento, setTipoEvento] = useState('');
    const [tiposDeEvento, setTiposDeEvento] = useState([]);

    
    const updateEventoNombre = (e) => {
        setEventoNombre(e.target.value);
    };
    
    const updateFechaEvento = (e) => {
        setFechaEvento(e.target.value);
    };

    const updateTipoEvento = (e) => {
        setTipoEvento(e.target.value);
    };
    
    const crearEvento = async (e) => {
        e.preventDefault();
        const dataNuevoEvento = {
            nombre: eventoNombre,
            fecha: fechaEvento, 
            tipo: {nombre: tipoEvento}
        }
        await apiService('eventos/', 'POST', dataNuevoEvento);
        terminar('eventos');
    }





    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Tipo de estructura

    const [tipoDeEstructuraNombre, settipoDeEstructuraNombre] = useState('');
    const updateTipoDeEstructuraNombre = (e) => {
        settipoDeEstructuraNombre(e.target.value);
    };
    
    const crearTipoDeEstructura = async (e) => {
        e.preventDefault();
        const dataNuevoTipoDeEstructura = {
            nombre: tipoDeEstructuraNombre,
        }
        await apiService('tipos-de-estructura/', 'POST', dataNuevoTipoDeEstructura);
        terminar('tipos-de-estructura');
    }





    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Tipo de evento

    const [tipoDeEventoNombre, settipoDeEventoNombre] = useState('');
    const updateTipoDeEventoNombre = (e) => {
        settipoDeEventoNombre(e.target.value);
    };
    
    const crearTipoDeEvento = async (e) => {
        e.preventDefault();
        const dataNuevoTipoDeEvento = {
            nombre: tipoDeEventoNombre,
        }
        await apiService('tipos-de-evento/', 'POST', dataNuevoTipoDeEvento);
        terminar('tipos-de-evento')
    }
    
    
    
    
    
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Tipo de aporte

    const [tipoDeAporteNombre, settipoDeAporteNombre] = useState('');
    const updateTipoDeAporteNombre = (e) => {
        settipoDeAporteNombre(e.target.value);
    };
    
    const crearTipoDeAporte = async (e) => {
        e.preventDefault();
        const dataNuevoTipoDeAporte = {
            nombre: tipoDeAporteNombre,
        }
        await apiService('tipos-de-aporte/', 'POST', dataNuevoTipoDeAporte);
        terminar('tipos-de-aporte')
    }





    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Rol de persona

    const [rolDePersonaNombre, setRolDePersonaNombre] = useState('');
    const [rolDePersonaDescripcion, setRolDePersonaDescripcion] = useState('');
    
    const updateRolDePersonaNombre = (e) => {
        setRolDePersonaNombre(e.target.value);
    };
    const updateRolDePersonaDescripcion = (e) => {
        setRolDePersonaDescripcion(e.target.value);
    };
    
    const crearRolDePersona = async (e) => {
        e.preventDefault();
        const dataNuevoRolDePersona = {
            nombre: rolDePersonaNombre,
            descripcion: rolDePersonaDescripcion
        }
        await apiService('roles-de-personas/', 'POST', dataNuevoRolDePersona);
        terminar('roles-de-personas')
    }





    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Hooks generales

    const terminar = (ruta) => {
        history.push("/");
        history.push("/" + ruta);
    }


    useEffect(  
        () => {
            const getZonas = async () => {
                const response = await apiService('zonas', 'GET');
                setZonas(response);
            }
            const getTiposEstructura = async () => {
                const response = await apiService('tipos-de-estructura', 'GET');
                setTiposEstructura(response);
            }
            const getPersonas = async () => {
                const response = await apiService('personas', 'GET');
                setPersonas(response);
            }
            const getTiposDeAporte = async () => {
                const response = await apiService('tipos-de-aporte', 'GET');
                setTiposAporte(response);
            }
            const getTiposDeEvento = async() => {
                const response = await apiService('tipos-de-evento', 'GET');
                setTiposDeEvento(response);
            }
            if(elemento === 'estructuras') {
                getZonas();
                getTiposEstructura();
            }
            if(elemento === 'aportes'){
                getPersonas();
                getTiposDeAporte();
            }
            if(elemento === 'eventos'){
                getTiposDeEvento();
            }
        }
    , []);

    return  (
        <div className="oscuro" name="oscuro" onClick={goBack}>
            <div className="popUp card columna container">
                { 
                    elemento === "estructuras"  ? (
                        <form onSubmit={crearEstructura} className="columna">
                            <h2>Agregar nueva estructura</h2>
                            <input type="text" name="estructuraNombre" onChange={updateEstructuraNombre} value={estructuraNombre} />
                            <select name="zona" value={estructuraZona} onChange={updateEstructuraZona}>
                                <option defaultValue value="0">Seleccione...</option>
                                {
                                    zonas.map(
                                        zona => (
                                            <option key={zona.id} value={zona.nombre}>{zona.nombre}</option>
                                        )
                                    )
                                }
                            </select>
                            <select name="tipoEstructura" value={estructuraTipo} onChange={updateEstructuraTipo}>
                                <option defaultValue value="0">Seleccione...</option>
                                {
                                    tiposEstructura.map(
                                        tipo => (
                                            <option key={tipo.id} value={tipo.nombre}>{tipo.nombre}</option>
                                        )
                                    )
                                }
                            </select>
                            <button className="button-primary">Crear estructura</button>
                        </form>
                    ) : null
                }
                { 
                    elemento === "aportes"  ? (
                        <form onSubmit={crearAporte} className="columna">
                            <h2>Agregar nuevo aporte</h2>
                            <input type="number" name="aporteMonto" onChange={updateAporteMonto} value={aporteMonto} />
                            <select name="personaAporte" value={personaAporte} onChange={updatePersonaAporte}>
                                <option defaultValue value="0">Seleccione...</option>
                                {
                                    personas.map(
                                        persona => (
                                        <option key={persona.id} value={persona.nombre + '|' + persona.rol.id}>{persona.nombre} de {persona.estructura.nombre}</option>
                                        )
                                    )
                                }
                            </select>
                            <input type="date" name="fechaAporte" onChange={updateFechaAporte} value={fechaAporte} />
                            <select name="tipoAporte" value={tipoAporte} onChange={updateTipoAporte}>
                                <option defaultValue value="0">Seleccione...</option>
                                {
                                    tiposAporte.map(
                                        tipo => (
                                            <option key={tipo.id} value={tipo.nombre}>{tipo.nombre}</option>
                                        )
                                    )
                                }
                            </select>
                            <button className="button-primary">Crear aporte</button>
                        </form>
                    ) : null
                }
                { 
                    elemento === "eventos"  ? (
                        <form onSubmit={crearEvento} className="columna">
                            <h2>Agregar nuevo evento</h2>
                            <input type="text" name="eventoNombre" onChange={updateEventoNombre} value={eventoNombre} />
                            <select name="tipoEvento" value={tipoEvento} onChange={updateTipoEvento}>
                                <option defaultValue value="0">Seleccione...</option>
                                {
                                    tiposDeEvento.map(
                                        tipo => (
                                            <option key={tipo.id} value={tipo.nombre}>{tipo .nombre}</option>
                                        )
                                    )
                                }
                            </select>
                            <input type="date" name="fechaEvento" onChange={updateFechaEvento} value={fechaEvento} />
                            <button className="button-primary">Crear evento</button>
                        </form>
                    ) : null
                }
                { 
                    elemento === "tipos-de-estructura"  ? (
                        <form onSubmit={crearTipoDeEstructura} className="columna">
                            <h2>Agregar nuevo tipo de estructura</h2>
                            <input type="text" name="tipoDeEstructuraNombre" onChange={updateTipoDeEstructuraNombre} value={tipoDeEstructuraNombre} />
                            <button className="button-primary">Crear tipo de estructura</button>
                        </form>
                    ) : null
                }
                { 
                    elemento === "tipos-de-evento"  ? (
                        <form onSubmit={crearTipoDeEvento} className="columna">
                            <h2>Agregar nuevo tipo de evento</h2>
                            <input type="text" name="tipoDeEventoNombre" onChange={updateTipoDeEventoNombre} value={tipoDeEventoNombre} />
                            <button className="button-primary">Crear tipo de evento</button>
                        </form>
                    ) : null
                }
                { 
                    elemento === "tipos-de-aporte"  ? (
                        <form onSubmit={crearTipoDeAporte} className="columna">
                            <h2>Agregar nuevo tipo de aporte</h2>
                            <input type="text" name="tipoDeAporteNombre" onChange={updateTipoDeAporteNombre} value={tipoDeAporteNombre} />
                            <button className="button-primary">Crear tipo de aporte</button>
                        </form>
                    ) : null
                }
                { 
                    elemento === "roles-de-personas"  ? (
                        <form onSubmit={crearRolDePersona} className="columna">
                            <h2>Agregar nuevo rol de persona</h2>
                            <input type="text" name="rolDePersonaNombre" onChange={updateRolDePersonaNombre} value={rolDePersonaNombre} />
                            <input type="text" name="rolDePersonaDescripcion" onChange={updateRolDePersonaDescripcion} value={rolDePersonaDescripcion} />
                            <button className="button-primary">Crear rol de persona</button>
                        </form>
                    ) : null
                }
            </div>
        </div>
    );
};

export default PopUpAdd;
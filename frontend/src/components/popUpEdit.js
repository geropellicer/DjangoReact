import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import { useHistory } from "react-router-dom";
import DATEOPTIONS from '../config/dateOptions';


const PopUpEdit = (props) => {

    const { elemento, id } = props.match.params;
    
    const history = useHistory();
    
    const goBack = (e) => {
        if(e.target.className === 'oscuro'){
            history.push("./");
        }
    }
    const manualGoBack = () => {
        history.push("./");
    }



    const [elementoEditar, setElementoEditar] = useState();

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
       
    const editarElemento = async (e) => {
        e.preventDefault();
        const objeto = construirObjetoEditar();
        await apiService(`${elemento}/${id}/`, 'PUT', objeto);
        terminar(elemento);
    }

    const terminar = (ruta) => {
        history.push("/");
        history.push("/" + ruta);
    }

    const cancelar = (e) => {
        e.preventDefault();
        manualGoBack();
    }

    const updateNombre = (e) => {
        setNombre(e.target.value);
    }
    const updateDescripcion = (e) => {
        setDescripcion(e.target.value);
    }

    const construirObjetoEditar = () => {
        let el = {};
        if(elemento === 'roles-de-personas'){
            el.nombre = nombre;
            el.descripcion = descripcion; 
        }
        if(elemento === 'tipos-de-aporte' || 
        elemento === 'tipos-de-evento' ||
        elemento === 'tipos-de-estructura' ||
        elemento === 'zonas'){
            el.nombre = nombre; 
        }
        if(elemento === 'aportes') {
            el.monto = aporteMonto;
            el.fecha = fechaAporte;
            el.persona = {nombre: personaAporte.split('|')[0], rol: parseInt(personaAporte.split('|')[1])};
            el.tipoAporte = {nombre: tipoAporte};
        }
        if(elemento === 'eventos'){
            el.nombre = eventoNombre;
            el.fecha = fechaEvento;
            el.tipo = {nombre: tipoEvento};
        }
        return el;
    };


    const [personaAporte, setPersonaAporte] = useState('');
    const [tipoAporte, setTipoAporte] = useState('');
    const [aporteMonto, setAporteMonto] = useState('');
    const [fechaAporte, setFechaAporte] = useState('');

    const updatePersonaAporte = (e) => {
        setPersonaAporte(e.target.value);
    }
    const updateTipoAporte = (e) => {
        setTipoAporte(e.target.value);
    }
    const updateAporteMonto = (e) => {
        setAporteMonto(e.target.value);
    }
    const updateFechaAporte = (e) => {
        setFechaAporte(e.target.value);
    }


    const [personas, setPersonas] = useState();
    const [tiposAporte, setTiposAporte] = useState();



    const [eventoNombre, setEventoNombre] = useState('');
    const [fechaEvento, setFechaEvento] = useState('');
    const [tipoEvento, setTipoEvento] = useState('');

    const updateEventoNombre = (e) => {
        setEventoNombre(e.target.value);
    }
    const updateFechaEvento = (e) => {
        setFechaEvento(e.target.value);
    }
    const updateTipoEvento = (e) => {
        setTipoEvento(e.target.value);
    }

    const [tiposDeEvento, setTiposDeEvento] = useState(); 

    useEffect(  
        () => {
            const getElemento = async () => {
                const response = await apiService(`${elemento}/${id}/`, 'GET');
                setElementoEditar(response);
                if(elemento === 'roles-de-personas'){
                    setNombre(response.nombre);
                    setDescripcion(response.descripcion);
                }
                if(elemento === 'tipos-de-aporte' || 
                elemento === 'tipos-de-evento' ||
                elemento === 'tipos-de-estructura' ||
                elemento === 'zonas'){
                    setNombre(response.nombre);
                }
                if(elemento === 'aportes'){
                    setAporteMonto(response.monto);
                    setPersonaAporte(response.persona.nombre + '|' + response.persona.rol);
                    setTipoAporte(response.tipoAporte.nombre);
                    var date = new Date(response.fecha);
                    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

                    setFechaAporte(dateString);
                }
                if(elemento === 'eventos'){
                    setEventoNombre(response.nombre);
                    var date = new Date(response.fecha);
                    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

                    setFechaEvento(dateString);
                    setTipoEvento(response.tipo.nombre);
                }
            }
            const getPersonas = async () => {
                const response = await apiService('personas', 'GET');
                setPersonas(response);
            }
            const getTiposDeAporte = async () => {
                const response = await apiService('tipos-de-aporte', 'GET');
                setTiposAporte(response);
            }
            const getTiposDeEvento = async () => {
                const response = await apiService('tipos-de-evento', 'GET');
                setTiposDeEvento(response);
            }


            getElemento();
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
                <form onSubmit={editarElemento} className="columna">
                    <h2>Editar elemento:</h2>
                    { 
                        elemento === "zonas" ||
                        elemento === "tipos-de-estructura" ||
                        elemento === "tipos-de-evento" ||
                        elemento === "tipos-de-aporte"  ? (
                            <div>
                                { elementoEditar ? (
                                    <div>
                                        <input type="text" autoFocus onChange={updateNombre} value={nombre}/>
                                    </div>
                                    ) : null}
                            </div>
                        ) : null
                    }
                    { 
                        elemento === "roles-de-personas"  ? (
                            <div>
                                { elementoEditar ? (
                                    <div>
                                        <input type="text" autoFocus onChange={updateNombre} value={nombre}/>
                                        <input type="text" onChange={updateDescripcion} value={descripcion}/>
                                    </div>
                                    ) : null}
                            </div>
                        ) : null
                    }
                    { 
                        elemento === "eventos" ? (
                            <div>
                                { elementoEditar ? (
                                    <div>
                                        <input type="text" name="eventoNombre" onChange={updateEventoNombre} value={eventoNombre} />
                                        <select name="tipoEvento" value={tipoEvento} onChange={updateTipoEvento}>
                                            { tiposDeEvento ?
                                                tiposDeEvento.map(
                                                    tipo => (
                                                        <option key={tipo.id} value={tipo.nombre}>{tipo .nombre}</option>
                                                    )
                                                ) : null
                                            }
                                        </select>
                                        <input type="date" name="fechaEvento" onChange={updateFechaEvento} value={fechaEvento} />
                                    </div>
                                    ) : null }
                            </div>
                        ) : null
                    }
                    { 
                        elemento === "aportes" ? (
                            <div>
                                { elementoEditar ? (
                                    <div>
                                        <input type="number" name="aporteMonto" autoFocus onChange={updateAporteMonto} value={aporteMonto} />
                                        <select name="personaAporte" value={personaAporte} onChange={updatePersonaAporte}>
                                            <option defaultValue value="0">Seleccione...</option>
                                            { personas ?
                                                personas.map(
                                                    persona => (
                                                    <option key={persona.id} value={persona.nombre + '|' + persona.rol.id}>{persona.nombre} de {persona.estructura.nombre}</option>
                                                    )
                                                ) : null
                                            }
                                        </select>
                                        <input type="date" name="fechaAporte" onChange={updateFechaAporte} value={fechaAporte} />
                                        <select name="tipoAporte" value={tipoAporte} onChange={updateTipoAporte}>
                                            <option defaultValue value="0">Seleccione...</option>
                                            { tiposAporte ?
                                                tiposAporte.map(
                                                    tipo => (
                                                        <option key={tipo.id} value={tipo.nombre}>{tipo.nombre}</option>
                                                    )
                                                ) : null
                                            }
                                        </select>
                                    </div>
                                    ) : null }
                            </div>
                        ) : null
                    }
                    <div>
                        <button onClick={cancelar} className="button-primary">Cancelar</button>
                        <button>Guardar cambios</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUpEdit;
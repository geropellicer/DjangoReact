import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import { useHistory, useParams } from "react-router-dom";


const PopUpEdit = (props) => {

    //const { elemento, id } = props.match.params;
    let { single, elemento, id } = useParams()
    
    const history = useHistory();
    
    const goBack = (e) => {
        if(e.target.className === 'oscuro'){
            history.push("../");
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
        if(elemento === 'estructuras'){
            el.nombre = estructuraNombre;
            el.tipo = {nombre: estructuraTipo};
            el.zona = {nombre: estructuraZona};
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


    const [estructuraNombre, setEstructuraNombre] = useState('');
    const [estructuraTipo, setEstructuraTipo] = useState('');
    const [estructuraZona, setEstructuraZona] = useState('');

    const updateEstructuraNombre = (e) => {
        setEstructuraNombre(e.target.value);
    };
    const updateEstructuraTipo = (e) => {
        setEstructuraTipo(e.target.value);
    };
    const updateEstructuraZona = (e) => {
        setEstructuraZona(e.target.value);
    };

    const [tiposEstructura, setTiposDeEstructura] = useState();
    const [zonas, setZonas] = useState();

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
                if(elemento === 'estructuras'){
                    setEstructuraNombre(response.nombre);
                    setEstructuraZona(response.zona.nombre);
                    setEstructuraTipo(response.tipo.nombre);
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
            const getTiposDeEstructura = async () => {
                const response = await apiService('tipos-de-estructura', 'GET');
                setTiposDeEstructura(response);
            }
            const getZonas = async () => {
                const response = await apiService('zonas', 'GET');
                setZonas(response);
            }


            getElemento();
            if(elemento === 'aportes'){
                getPersonas();
                getTiposDeAporte();
            }
            if(elemento === 'eventos'){
                getTiposDeEvento();
            }
            if(elemento === 'estructuras'){
                getTiposDeEstructura();
                getZonas();
            }

            console.log("Elemento: " + elemento);
            console.log("ID: " + id);
            console.log("Single: " + single);
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
                    { 
                        elemento === "estructuras" ? (
                            <div>
                                { elementoEditar ? (
                                    <div>
                                        <input type="text" name="estructuraNombre" onChange={updateEstructuraNombre} value={estructuraNombre} />
                                        <select name="zona" value={estructuraZona} onChange={updateEstructuraZona}>
                                            <option defaultValue value="0">Seleccione...</option>
                                            { zonas ?
                                                zonas.map(
                                                    zona => (
                                                        <option key={zona.id} value={zona.nombre}>{zona.nombre}</option>
                                                    )
                                                ) : null
                                            }
                                        </select>
                                        <select name="tipoEstructura" value={estructuraTipo} onChange={updateEstructuraTipo}>
                                            <option defaultValue value="0">Seleccione...</option>
                                            { tiposEstructura ?
                                                tiposEstructura.map(
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
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
        console.log(el);
        return el;
    };

    useEffect(  
        () => {
            const getElemento = async () => {
                const response = await apiService(`${elemento}/${id}/`, 'GET');
                setElementoEditar(response);
                if(elemento === 'roles-de-personas'){
                    setNombre(response.nombre);
                    setDescripcion(response.descripcion);
                }
            }
            getElemento();
        }
    , []);

    return  (
        <div className="oscuro" name="oscuro" onClick={goBack}>
            <div className="popUp card columna container">
                <form onSubmit={editarElemento} className="columna">
                    <h2>Editar elemento:</h2>
                    { 
                        elemento === "zonas" ||
                        elemento === "estructuras" ||
                        elemento === "tipos-de-estructura" ||
                        elemento === "tipos-de-evento" ||
                        elemento === "tipos-de-aporte"  ? (
                            <div>
                                { elementoEditar ? (
                                        <h2>{elementoEditar.nombre}</h2>
                                    ) : null}
                            </div>
                        ) : null
                    }
                    { 
                        elemento === "roles-de-personas"  ? (
                            <div>
                                { elementoEditar ? (
                                    <div>
                                        <input type="text" onChange={updateNombre} value={nombre}/>
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
                                        <h3>{elementoEditar.nombre}</h3>
                                        <h5>Fecha: {new Date(elementoEditar.fecha).toLocaleDateString('es-AR', DATEOPTIONS)}</h5>
                                        <h5>Tipo: {elementoEditar.tipo.nombre}</h5>
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
                                        <h3>{ elementoEditar.tipoAporte.nombre }</h3>
                                        <h4>
                                            &nbsp;de {elementoEditar.persona.nombre}
                                            &nbsp;de {elementoEditar.fecha != null && elementoEditar.fecha != '' ? (new Date(elementoEditar.fecha).toLocaleDateString('es-AR', DATEOPTIONS)) : ('<sin fecha>')}
                                        </h4>
                                        <h3>de ${elementoEditar.monto}</h3>
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
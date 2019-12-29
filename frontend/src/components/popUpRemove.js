import React,{useEffect, useState} from 'react';
import apiService from '../config/apiService';
import { useHistory } from "react-router-dom";
import DATEOPTIONS from '../config/dateOptions';


const PopUpRemove = (props) => {

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



    const [elementoEliminar, setElementoEliminar] = useState();
       
    const eliminarElemento = async (e) => {
        e.preventDefault();
        await apiService(`${elemento}/${id}/`, 'DELETE');
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


    useEffect(  
        () => {
            const getElemento = async () => {
                const response = await apiService(`${elemento}/${id}/`, 'GET');
                setElementoEliminar(response);
            }
            getElemento();
        }
    , []);

    return  (
        <div className="oscuro" name="oscuro" onClick={goBack}>
            <div className="popUp card columna container">
                <form onSubmit={eliminarElemento} className="columna">
                    <h2>Eliminar:</h2>
                    { 
                        elemento === "zonas" ||
                        elemento === "estructuras" ||
                        elemento === "tipos-de-estructura" ||
                        elemento === "tipos-de-evento" ||
                        elemento === "tipos-de-aporte" ||
                        elemento === "roles-de-personas"  ? (
                            <div>
                                { elementoEliminar ? (
                                        <h2>{elementoEliminar.nombre}</h2>
                                    ) : null}
                            </div>
                        ) : null
                    }
                    { 
                        elemento === "eventos" ? (
                            <div>
                                { elementoEliminar ? (
                                    <div>
                                        <h3>{elementoEliminar.nombre}</h3>
                                        <h5>Fecha: {new Date(elementoEliminar.fecha).toLocaleDateString('es-AR', DATEOPTIONS)}</h5>
                                        <h5>Tipo: {elementoEliminar.tipo.nombre}</h5>
                                    </div>
                                    ) : null }
                            </div>
                        ) : null
                    }
                    { 
                        elemento === "aportes" ? (
                            <div>
                                { elementoEliminar ? (
                                    <div>
                                        <h3>{ elementoEliminar.tipoAporte.nombre }</h3>
                                        <h4>
                                            &nbsp;de {elementoEliminar.persona.nombre}
                                            &nbsp;de {elementoEliminar.fecha != null && elementoEliminar.fecha != '' ? (new Date(elementoEliminar.fecha).toLocaleDateString('es-AR', DATEOPTIONS)) : ('<sin fecha>')}
                                        </h4>
                                        <h3>de ${elementoEliminar.monto}</h3>
                                    </div>
                                    ) : null }
                            </div>
                        ) : null
                    }
                    <div>
                        <button onClick={cancelar} className="button-primary">Cancelar</button>
                        <button>Eliminar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUpRemove;
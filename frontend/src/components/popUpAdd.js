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
    
    
    const crearEstructura = (e) => {
        e.preventDefault();
        const dataNuevaEstructura = {
            nombre: estructuraNombre,
            zona: {nombre: estructuraZona},
            tipo: {nombre: estructuraTipo}
        }
        apiService('estructuras/', 'POST', dataNuevaEstructura);
    }




    
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // Crear Tipo de estructura

    const [tipoDeEstructuraCreada, setTipoDeEstructuraCreada] = useState(false);
    const [tipoDeEstructuraNombre, settipoDeEstructuraNombre] = useState('');
    const updateTipoDeEstructuraNombre = (e) => {
        settipoDeEstructuraNombre(e.target.value);
    };
    
    const crearTipoDeEstructura = async (e) => {
        e.preventDefault();
        const dataNuevoTipoDeEstructura = {
            nombre: tipoDeEstructuraNombre,
        }
        const dataReturned = await apiService('tipos-de-estructura/', 'POST', dataNuevoTipoDeEstructura);
        terminar('tipos-de-estructura')
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
            if(elemento === 'estructuras') {
                getZonas();
                getTiposEstructura();
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
                    elemento === "tipos-de-estructura"  ? (
                        <form onSubmit={crearTipoDeEstructura} className="columna">
                            <h2>Agregar nuevo tipo de estructura</h2>
                            <input type="text" name="tipoDeEstructuraNombre" onChange={updateTipoDeEstructuraNombre} value={tipoDeEstructuraNombre} />
                            <button className="button-primary">Crear tipo de estructura</button>
                        </form>
                    ) : null
                }
            </div>
        </div>
    );
};

export default PopUpAdd;
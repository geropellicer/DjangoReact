import React,{useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import DATEOPTIONS from '../config/dateOptions';
import {EditModeContext} from './editModeContext';
import {RemoveModeContext} from './removeModeContext';

const Tabla = ({columnas, data, refColumnas, refPropsColumnas, linkBase, alineacionesColumnas}) => {

    const [editMode, setEditMode] = useContext(EditModeContext);
    const [removeMode, setRemoveMode] = useContext(RemoveModeContext);

    useEffect(() => {
        prepararFilas();
    }, [data])

    const [filas, setFilas] = useState([]);

    const prepararFilas = () => {
        for(let i=0; i < data.length; i++){
            let nuevaFila = [];
            for(let j=0; j < refColumnas.length; j++){
                let valor = {};
                if(columnas[j] !== 'Fecha' && columnas[j] !== 'Monto'){
                    valor = {'key': j, 'valor': data[i][refColumnas[j]]};
                } else if(columnas[j] === 'Fecha') {
                    valor = {'key': j, 'valor': new Date(data[i][refColumnas[j]])};
                } else if(columnas[j] === 'Monto') {
                    valor = {'key': j, 'valor': '$' + data[i][refColumnas[j]].toString()};
                }
                if(refPropsColumnas[j] !== '') {
                    valor['valor'] = valor['valor'][refPropsColumnas[j]];
                };
                nuevaFila.push(valor);          
            }
            setFilas(prevFilas => [...prevFilas, nuevaFila] );
        }
    };

    

    return(
        <div className="u-full-width tableContainer">
            <table className="u-full-width">
                <thead>
                    <tr>
                    {
                        columnas.map(
                            (element, i) => (
                                <th className={alineacionesColumnas[i] === 'c' ? 'textCenter' : 'textLeft'} key={element}>{element}</th>
                            )
                        )
                    }
                    {
                        editMode ? (<th><ion-icon name="create"></ion-icon></th>) : null
                    }
                    {
                        removeMode ? (<th><ion-icon name="trash"></ion-icon></th>) : null
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        filas.map(
                            (fila, i) => {
                                return(
                                    <tr key={i}>
                                    {
                                        fila.map(
                                            (col, j) => (
                                                <td className={alineacionesColumnas[j] === 'c' ? 'textCenter' : 'textLeft'} key={col['key']}>  
                                                    <Link to={`${linkBase}/${fila[0]['valor']}`}>
                                                        { columnas[j] !== 'Fecha' ? col['valor'] : col['valor'].toLocaleDateString('es-AR', DATEOPTIONS)}
                                                    </Link>
                                                </td>
                                            )
                                        )
                                    }
                                    {
                                        editMode ? (<td><button><ion-icon name="create"></ion-icon></button></td>) : null
                                    }
                                    {
                                        removeMode ? (<td><button><ion-icon name="trash"></ion-icon></button></td>) : null
                                    }
                                </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
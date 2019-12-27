import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Tabla = ({columnas, data, refColumnas, refPropsColumnas, linkBase, alineacionesColumnas}) => {

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        prepararFilas();
    }, [data])

    const [filas, setFilas] = useState([]);

    const prepararFilas = () => {
        for(let i=0; i < data.length; i++){
            let nuevaFila = [];
            for(let j=0; j < refColumnas.length; j++){
                let valor = {};
                if(columnas[j] !== 'Fecha'){
                    valor = {'key': j, 'valor': data[i][refColumnas[j]]};
                } else {
                    valor = {'key': j, 'valor': new Date(data[i][refColumnas[j]])};
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
                                                        { columnas[j] !== 'Fecha' ? col['valor'] : col['valor'].toLocaleDateString('es-AR', dateOptions)}
                                                    </Link>
                                                </td>
                                            )
                                        )
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
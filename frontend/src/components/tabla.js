import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const Tabla = ({columnas, data, refColumnas, refPropsColumnas, linkBase}) => {

    useEffect(() => {
        prepararFilas();
    }, [data])

    const [filas, setFilas] = useState([]);

    const prepararFilas = () => {
        console.log(data.length);
        for(let i=0; i < data.length; i++){
            let nuevaFila = [];
            for(let j=0; j < refColumnas.length; j++){
                let valor = data[i][refColumnas[j]];
                if(refPropsColumnas[j] !== '') {
                    console.log("ocurrio una vez");
                    valor = valor[refPropsColumnas[j]];
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
                            (element) => (
                                <th key={element}>{element}</th>
                            )
                        )
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        filas.map(
                            (fila) => {
                                console.log(fila);
                                return(
                                    <tr key={fila}>
                                    {
                                        fila.map(
                                            (col) => (
                                                <td key={col}>  
                                                    <Link to={`${linkBase}/${fila[0]}`}>
                                                        {col}
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
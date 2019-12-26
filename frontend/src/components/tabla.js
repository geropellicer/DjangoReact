import React,{useEffect} from 'react';

const Tabla = ({columnas, filas}) => {

    useEffect(() => {
        //console.log(typeof(columnas));
    }, [])

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
                            (fila) => (
                                <tr key={fila}>
                                    {
                                        fila.map(
                                            (col) => (
                                                <td key={col}> {col} </td>
                                            )
                                        )
                                    }
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
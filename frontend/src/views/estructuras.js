import React,{useEffect} from 'react';
import Tabla from '../components/tabla';
import BASEURL from '../assets/baseurl';

const Estructuras = () => {
    const ENDPOINT = 'estructuras';

    const columnas = ['Nombre', 'Zona', 'Tipo', 'Cantidad de personas'];

    const filas = [
        ['primera fila A', 'primera fila B', 'primera fila C', 'primera fila D'],
        ['segunda fila A', 'segunda fila B', 'segunda fila C', 'segunda fila D'],
        ['segunda fila A', 'tercera fila B', 'tercera fila C', 'tercera fila D'],
        ['cuarta fila A', 'cuarta fila B', 'cuarta fila C', 'cuarta fila D'],
        ['quinta fila A', 'quinta fila B', 'quinta fila C', 'primera fila D'],
    ];

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch(`${BASEURL}${ENDPOINT}`);
        const data = await response.json();
        //setRecipes(data.hits);
        console.log(data);
    }

    return(
        <div className="main container">
            <header className="sectionHeader">
                <h3>Estructuras</h3>
            </header>
            <Tabla columnas={columnas} filas={filas} />
        </div>
    );
};

export default Estructuras;
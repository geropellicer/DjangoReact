import React,{useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const ItemHeader = ({titulo, url}) => {

    let { slug, elemento, id} = useParams()
    
    useEffect(() => {
        console.log("slug: " + slug);
        console.log("elemento: " + elemento);
        console.log("id: " + id);
    }, [slug, elemento, id]);

    return(
        <header className="sectionHeader fila">
            <h3>{titulo}</h3>
            <div className="fila">
                <Link to={`/${url}/eliminar/single`}>
                <button className="fila eliminar">
                    <ion-icon name="trash"></ion-icon>
                </button>
                </Link>
                <Link to={`/${url}/editar/single`}>
                <button className="fila editar">
                    <ion-icon name="create"></ion-icon>
                </button>
                </Link>
            </div>
        </header>
    );
};

export default ItemHeader;
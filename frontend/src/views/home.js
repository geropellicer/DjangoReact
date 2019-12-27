import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="doubleCenter">
            <ul className="homeMenu container">
                <Link className="card" to='/estructuras'>
                    <li> 
                        <span><ion-icon name="home"></ion-icon></span>
                        Equipos/Estructuras
                    </li>
                </Link>
                <Link className="card" to='/personas'>
                    <li> 
                        <span><ion-icon name="people"></ion-icon></span>
                        Personas
                    </li>
                </Link>
                <Link className="card" to='/zonas'>
                    <li> 
                        <span><ion-icon name="map"></ion-icon></span>
                        Zonas
                    </li>
                </Link>
                <Link className="card" to='/eventos'>
                    <li> 
                        <span><ion-icon name="calendar"></ion-icon></span>
                        Eventos
                    </li>
                </Link>
                <Link className="card" to='/aportes'>
                    <li> 
                        <span><ion-icon name="cash"></ion-icon></span>
                        Aportes
                    </li>
                </Link>
                <Link className="card" to='/tipos-de-estructura'>
                    <li> 
                        <span><ion-icon name="build"></ion-icon></span>
                        Tipos de estructura
                    </li>
                </Link>
                <Link className="card" to='/tipos-de-evento'>
                    <li> 
                        <span><ion-icon name="build"></ion-icon></span>
                        Tipos de evento
                    </li>
                </Link>
                <Link className="card" to='/tipos-de-aporte'>
                    <li> 
                        <span><ion-icon name="build"></ion-icon></span>
                        Tipos de aporte
                    </li>
                </Link>
                <Link className="card" to='/roles-de-personas'>
                    <li> 
                        <span><ion-icon name="build"></ion-icon></span>
                        Roles de personas
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Home;
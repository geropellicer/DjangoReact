import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className="doubleCenter">
            <ul className="homeMenu container">
                <Link to='/estructuras'>
                    <li className="card"> 
                        <span><ion-icon name="home"></ion-icon></span>
                        Equipos/Estructuras
                    </li>
                </Link>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
                <li className="card"> 
                    <span><ion-icon name="home"></ion-icon></span>
                    Equipos/Estructuras
                </li>
            </ul>
        </div>
    );
};

export default Home;
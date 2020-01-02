import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const TopMenu = () => {

    const [display, setDisplay] = useState(false); 

    const updateDisplay = () => {
        setDisplay(!display);
    }

    const click = () => {
        setDisplay(false);
    };

    return(

        <div className="topMenu">
            <button onClick={updateDisplay} className={ display ? 'topMenuButton button-primary over' : 'topMenuButton button-primary'}>
                Menú
            </button>
            <div className={display ? 'topMenuList card display' : 'topMenuList card'}>
                <ul>
                    <li>
                        <Link onClick={click} to='/'>
                            <ion-icon name="home"></ion-icon> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/estructuras'>
                            <ion-icon name="business"></ion-icon> Estructuras
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/personas'>
                        <ion-icon name="people"></ion-icon> Personas
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/zonas'>
                            <ion-icon name="map"></ion-icon> Zonas
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/eventos'>
                        <ion-icon name="calendar"></ion-icon> Eventos
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/aportes'>
                            <ion-icon name="cash"></ion-icon> Aportes
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/tipos-de-estructura'>
                            <ion-icon name="build"></ion-icon> Tipos de estructura
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/tipos-de-evento'>
                            <ion-icon name="build"></ion-icon> Tipos de evento
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/tipos-de-aporte'>
                            <ion-icon name="build"></ion-icon> Tipos de aporte
                        </Link>
                    </li>
                    <li>
                        <Link onClick={click} to='/roles-de-personas'>
                            <ion-icon name="build"></ion-icon> Roles de personas
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default TopMenu;
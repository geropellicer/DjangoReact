import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const TopMenu = () => {

    const [display, setDisplay] = useState(false); 

    const updateDisplay = () => {
        setDisplay(!display);
    }

    return(

        <div className="topMenu">
            <button onClick={updateDisplay} className={ display ? 'topMenuButton button-primary over' : 'topMenuButton button-primary'}>
                Menú
            </button>
            <div className={display ? 'topMenuList card display' : 'topMenuList card'}>
                <ul>
                    <li>
                        <Link to='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/estructuras'>
                            Estructuras
                        </Link>
                    </li>
                    <li>
                        <Link to='/personas'>
                            Personas
                        </Link>
                    </li>
                    <li>
                        <Link to='/zonas'>
                            Zonas
                        </Link>
                    </li>
                    <li>
                        <Link to='/eventos'>
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <Link to='/aportes'>
                            Aportes
                        </Link>
                    </li>
                    <li>
                        <Link to='/tipos-de-estructura'>
                            Tipos de estructura
                        </Link>
                    </li>
                    <li>
                        <Link to='/tipos-de-evento'>
                            Tipos de evento
                        </Link>
                    </li>
                    <li>
                        <Link to='/tipos-de-aporte'>
                            Tipos de aporte
                        </Link>
                    </li>
                    <li>
                        <Link to='/roles-de-personas'>
                            Roles de personas
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default TopMenu;
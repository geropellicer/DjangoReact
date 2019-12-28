import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';

import Home from './views/home';
import Login from './views/login';

import Estructuras from './views/estructuras';
import Estructura from './views/estructura';
import Zonas from './views/zonas';
import Zona from './views/zona';
import RolesDePersonas from './views/rolesDePersonas';
import RolDePersona from './views/rolDePersona';
import TiposDeEvento from './views/tiposDeEvento';
import TipoDeEvento from './views/tipoDeEvento';
import Eventos from './views/eventos';
import Evento from './views/evento';
import TiposDeEstructura from './views/tiposDeEstructura';
import TipoDeEstructura from './views/tipoDeEstructura';
import Personas from './views/personas';
import TiposDeAporte from './views/tiposDeAporte';
import TipoDeAporte from './views/tipoDeAporte';
import Aportes from './views/aportes';
import Aporte from './views/aporte';
import Mapa from './components/mapa';
import PopUpAdd from './components/popUpAdd';


function App() {
  return (
    <div className="App container">
      <Router>
        <Nav/>
        <div className="appContent">
          <Mapa/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/zonas" component={Zonas} exact/>
            <Route path="/zonas/:id" component={Zona} exact/>
            <Route path="/eventos" component={Eventos} exact/>
            <Route path="/eventos/:id" component={Evento} exact/>
            <Route path="/aportes" component={Aportes}/>
            <Route path="/aportes/:id" component={Aporte} exact/>
            <Route path="/personas" component={Personas} exact/>
            <Route path="/personas/:id" component={Personas} exact/>
            <Route path="/estructuras" component={Estructuras} />
            <Route path="/estructuras/:id" component={Estructura} exact/>
            <Route path="/tipos-de-evento" component={TiposDeEvento}/>
            <Route path="/tipos-de-evento/:id" component={TipoDeEvento} exact/>
            <Route path="/tipos-de-aporte" component={TiposDeAporte}/>
            <Route path="/tipos-de-aporte/:id" component={TipoDeAporte} exact/>
            <Route path="/roles-de-personas" component={RolesDePersonas} />
            <Route path="/roles-de-personas/:id" component={RolDePersona} exact/>
            <Route path="/tipos-de-estructura" component={TiposDeEstructura} />
            <Route path="/tipos-de-estructura/:id" component={TipoDeEstructura} exact/>
          </Switch>
          <Route path="/:elemento/agregar" component={PopUpAdd}/>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

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
import PopUpRemove from './components/popUpRemove';
import PopUpEdit from './components/popUpEdit';


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
              <Route path="/zonas/editar/:id" component={Zonas} exact/>
              <Route path="/zonas/agregar" component={Zonas} exact/>
              <Route path="/zonas/eliminar/:id" component={Zonas} exact/>
              <Route path="/zonas/:id" component={Zona} exact/>
              <Route path="/zonas/:id/editar/single" component={Zona} exact/>
              <Route path="/zonas/:id/eliminar/single" component={Zona} exact/>
              <Route path="/eventos" component={Eventos} exact/>
              <Route path="/eventos/editar/:id" component={Eventos} exact/>
              <Route path="/eventos/agregar" component={Eventos} exact/>
              <Route path="/eventos/eliminar/:id" component={Eventos} exact/>
              <Route path="/eventos/:id" component={Evento} exact/>
              <Route path="/eventos/:id/editar/single" component={Evento} exact/>
              <Route path="/eventos/:id/eliminar/single" component={Evento} exact/>
              <Route path="/aportes" component={Aportes} exact/>
              <Route path="/aportes/editar/:id" component={Aportes} exact/>
              <Route path="/aportes/agregar" component={Aportes} exact/>
              <Route path="/aportes/eliminar/:id" component={Aportes} exact/>
              <Route path="/aportes/:id" component={Aporte} exact/>
              <Route path="/aportes/:id/editar/single" component={Aporte} exact/>
              <Route path="/aportes/:id/eliminar/single" component={Aporte} exact/>
              <Route path="/personas" component={Personas} exact/>
              <Route path="/personas/editar/:id" component={Personas} exact/>
              <Route path="/personas/agregar" component={Personas} exact/>
              <Route path="/personas/eliminar/:id" component={Personas} exact/>
              <Route path="/personas/:id" component={Personas} exact/>
              <Route path="/personas/:id/editar/single" component={Personas} exact/>
              <Route path="/personas/:id/eliminar/single" component={Personas} exact/>
              <Route path="/estructuras" component={Estructuras} exact/>
              <Route path="/estructuras/editar/:id" component={Estructuras} exact/>
              <Route path="/estructuras/agregar" component={Estructuras} exact/>
              <Route path="/estructuras/eliminar/:id" component={Estructuras} exact/>
              <Route path="/estructuras/:id" component={Estructura} exact/>
              <Route path="/estructuras/:id/editar/single" component={Estructura} exact/>
              <Route path="/estructuras/:id/eliminar/single" component={Estructura} exact/>
              <Route path="/tipos-de-evento" component={TiposDeEvento} exact/>
              <Route path="/tipos-de-evento/editar/:id" component={TiposDeEvento} exact/>
              <Route path="/tipos-de-evento/agregar" component={TiposDeEvento} exact/>
              <Route path="/tipos-de-evento/eliminar/:id" component={TiposDeEvento} exact/>
              <Route path="/tipos-de-evento/:id" component={TipoDeEvento} exact/>
              <Route path="/tipos-de-evento/:id/editar/single" component={TipoDeEvento} exact/>
              <Route path="/tipos-de-evento/:id/eliminar/single" component={TipoDeEvento} exact/>
              <Route path="/tipos-de-aporte" component={TiposDeAporte} exact/>
              <Route path="/tipos-de-aporte/editar/:id" component={TiposDeAporte} exact/>
              <Route path="/tipos-de-aporte/agregar" component={TiposDeAporte} exact/>
              <Route path="/tipos-de-aporte/eliminar/:id" component={TiposDeAporte} exact/>
              <Route path="/tipos-de-aporte/:id" component={TipoDeAporte} exact/>
              <Route path="/tipos-de-aporte/:id/editar/single" component={TipoDeAporte} exact/>
              <Route path="/tipos-de-aporte/:id/eliminar/single" component={TipoDeAporte} exact/>
              <Route path="/roles-de-personas" component={RolesDePersonas} exact/>
              <Route path="/roles-de-personas/editar/:id" component={RolesDePersonas} exact/>
              <Route path="/roles-de-personas/agregar" component={RolesDePersonas} exact/>
              <Route path="/roles-de-personas/eliminar/:id" component={RolesDePersonas} exact/>
              <Route path="/roles-de-personas/:id" component={RolDePersona} exact/>
              <Route path="/roles-de-personas/:id/editar/single" component={RolDePersona} exact/>
              <Route path="/roles-de-personas/:id/eliminar/single" component={RolDePersona} exact/>
              <Route path="/tipos-de-estructura" component={TiposDeEstructura} exact/>
              <Route path="/tipos-de-estructura/editar/:id" component={TiposDeEstructura} exact/>
              <Route path="/tipos-de-estructura/agregar" component={TiposDeEstructura} exact/>
              <Route path="/tipos-de-estructura/eliminar/:id" component={TiposDeEstructura} exact/>
              <Route path="/tipos-de-estructura/:id" component={TipoDeEstructura} exact/>
              <Route path="/tipos-de-estructura/:id/editar/single" component={TipoDeEstructura} exact/>
              <Route path="/tipos-de-estructura/:id/eliminar/single" component={TipoDeEstructura} exact/>
            </Switch>
            <Route path="/:elemento/agregar" component={PopUpAdd} exact/>
            <Route path="/:elemento/:id/eliminar/:single" component={PopUpRemove} exact/>
            <Route path="/:elemento/eliminar/:id" component={PopUpRemove} exact/>
            <Route path="/:elemento/:id/editar/:single" component={PopUpEdit} exact/>
            <Route path="/:elemento/editar/:id" component={PopUpEdit} exact/>
          </div>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;

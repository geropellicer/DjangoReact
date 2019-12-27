import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';

import Home from './views/home';
import Estructuras from './views/estructuras';
import Estructura from './views/estructura';
import Login from './views/login';
import Zonas from './views/zonas';
import RolesDePersonas from './views/rolesDePersonas';
import TiposDeEvento from './views/tiposDeEvento';
import Eventos from './views/eventos';
import TiposDeEstructura from './views/tiposDeEstructura';
import Personas from './views/personas';

function App() {
  return (
    <div className="App container">
      <Router>
        <Nav/>
        <div className="appContent">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/zonas" component={Zonas} exact/>
            <Route path="/zonas/:id" component={Zonas} exact/>
            <Route path="/eventos" component={Eventos} exact/>
            <Route path="/eventos/:id" component={Eventos} exact/>
            <Route path="/personas" component={Personas} exact/>
            <Route path="/personas/:id" component={Personas} exact/>
            <Route path="/estructuras" component={Estructuras} exact/>
            <Route path="/estructuras/:id" component={Estructura} exact/>
            <Route path="/tipos-de-evento" component={TiposDeEvento} exact/>
            <Route path="/tipos-de-evento/:id" component={TiposDeEvento} exact/>
            <Route path="/roles-de-personas" component={RolesDePersonas} exact/>
            <Route path="/roles-de-personas/:id" component={RolesDePersonas} exact/>
            <Route path="/tipos-de-estructura" component={TiposDeEstructura} exact/>
            <Route path="/tipos-de-estructura/:id" component={TiposDeEstructura} exact/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

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
import rolesDePersonas from './views/rolesDePersonas';
import tiposDeEvento from './views/tiposDeEvento';
import Eventos from './views/eventos';

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
            <Route path="/estructuras" component={Estructuras} exact/>
            <Route path="/estructuras/:id" component={Estructura} exact/>
            <Route path="/tipos-de-evento" component={tiposDeEvento} exact/>
            <Route path="/tipos-de-evento/:id" component={tiposDeEvento} exact/>
            <Route path="/roles-de-personas" component={rolesDePersonas} exact/>
            <Route path="/roles-de-personas/:id" component={rolesDePersonas} exact/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import React,{useEffect} from 'react';
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

import PrivateRoute from './components/PrivateRoute';

import {loadUser} from './redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import NotFound from './components/notFound';

function App() {

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const pendingLoad = useSelector(state => state.auth.pendingLoad);

  useEffect(
    () => {
      loadUser(dispatch, token);
    }, [pendingLoad]
  );

  return (
      <div className="App container">
        <Router>
          <Nav/>
          <div className="appContent">
            <Mapa/>
            <Switch>
              <Route path="/login" component={Login} exact/>
              <PrivateRoute path="/" component={Home} exact/>
              <PrivateRoute path="/zonas" component={Zonas} exact/>
              <PrivateRoute path="/zonas/editar/:id" component={Zonas} exact/>
              <PrivateRoute path="/zonas/agregar" component={Zonas} exact/>
              <PrivateRoute path="/zonas/eliminar/:id" component={Zonas} exact/>
              <PrivateRoute path="/zonas/:id" component={Zona} exact/>
              <PrivateRoute path="/zonas/:id/editar/single" component={Zona} exact/>
              <PrivateRoute path="/zonas/:id/eliminar/single" component={Zona} exact/>
              <PrivateRoute path="/eventos" component={Eventos} exact/>
              <PrivateRoute path="/eventos/editar/:id" component={Eventos} exact/>
              <PrivateRoute path="/eventos/agregar" component={Eventos} exact/>
              <PrivateRoute path="/eventos/eliminar/:id" component={Eventos} exact/>
              <PrivateRoute path="/eventos/:id" component={Evento} exact/>
              <PrivateRoute path="/eventos/:id/editar/single" component={Evento} exact/>
              <PrivateRoute path="/eventos/:id/eliminar/single" component={Evento} exact/>
              <PrivateRoute path="/aportes" component={Aportes} exact/>
              <PrivateRoute path="/aportes/editar/:id" component={Aportes} exact/>
              <PrivateRoute path="/aportes/agregar" component={Aportes} exact/>
              <PrivateRoute path="/aportes/eliminar/:id" component={Aportes} exact/>
              <PrivateRoute path="/aportes/:id" component={Aporte} exact/>
              <PrivateRoute path="/aportes/:id/editar/single" component={Aporte} exact/>
              <PrivateRoute path="/aportes/:id/eliminar/single" component={Aporte} exact/>
              <PrivateRoute path="/personas" component={Personas} exact/>
              <PrivateRoute path="/personas/editar/:id" component={Personas} exact/>
              <PrivateRoute path="/personas/agregar" component={Personas} exact/>
              <PrivateRoute path="/personas/eliminar/:id" component={Personas} exact/>
              <PrivateRoute path="/personas/:id" component={Personas} exact/>
              <PrivateRoute path="/personas/:id/editar/single" component={Personas} exact/>
              <PrivateRoute path="/personas/:id/eliminar/single" component={Personas} exact/>
              <PrivateRoute path="/estructuras" component={Estructuras} exact/>
              <PrivateRoute path="/estructuras/editar/:id" component={Estructuras} exact/>
              <PrivateRoute path="/estructuras/agregar" component={Estructuras} exact/>
              <PrivateRoute path="/estructuras/eliminar/:id" component={Estructuras} exact/>
              <PrivateRoute path="/estructuras/:id" component={Estructura} exact/>
              <PrivateRoute path="/estructuras/:id/editar/single" component={Estructura} exact/>
              <PrivateRoute path="/estructuras/:id/eliminar/single" component={Estructura} exact/>
              <PrivateRoute path="/tipos-de-evento" component={TiposDeEvento} exact/>
              <PrivateRoute path="/tipos-de-evento/editar/:id" component={TiposDeEvento} exact/>
              <PrivateRoute path="/tipos-de-evento/agregar" component={TiposDeEvento} exact/>
              <PrivateRoute path="/tipos-de-evento/eliminar/:id" component={TiposDeEvento} exact/>
              <PrivateRoute path="/tipos-de-evento/:id" component={TipoDeEvento} exact/>
              <PrivateRoute path="/tipos-de-evento/:id/editar/single" component={TipoDeEvento} exact/>
              <PrivateRoute path="/tipos-de-evento/:id/eliminar/single" component={TipoDeEvento} exact/>
              <PrivateRoute path="/tipos-de-aporte" component={TiposDeAporte} exact/>
              <PrivateRoute path="/tipos-de-aporte/editar/:id" component={TiposDeAporte} exact/>
              <PrivateRoute path="/tipos-de-aporte/agregar" component={TiposDeAporte} exact/>
              <PrivateRoute path="/tipos-de-aporte/eliminar/:id" component={TiposDeAporte} exact/>
              <PrivateRoute path="/tipos-de-aporte/:id" component={TipoDeAporte} exact/>
              <PrivateRoute path="/tipos-de-aporte/:id/editar/single" component={TipoDeAporte} exact/>
              <PrivateRoute path="/tipos-de-aporte/:id/eliminar/single" component={TipoDeAporte} exact/>
              <PrivateRoute path="/roles-de-personas" component={RolesDePersonas} exact/>
              <PrivateRoute path="/roles-de-personas/editar/:id" component={RolesDePersonas} exact/>
              <PrivateRoute path="/roles-de-personas/agregar" component={RolesDePersonas} exact/>
              <PrivateRoute path="/roles-de-personas/eliminar/:id" component={RolesDePersonas} exact/>
              <PrivateRoute path="/roles-de-personas/:id" component={RolDePersona} exact/>
              <PrivateRoute path="/roles-de-personas/:id/editar/single" component={RolDePersona} exact/>
              <PrivateRoute path="/roles-de-personas/:id/eliminar/single" component={RolDePersona} exact/>
              <PrivateRoute path="/tipos-de-estructura" component={TiposDeEstructura} exact/>
              <PrivateRoute path="/tipos-de-estructura/editar/:id" component={TiposDeEstructura} exact/>
              <PrivateRoute path="/tipos-de-estructura/agregar" component={TiposDeEstructura} exact/>
              <PrivateRoute path="/tipos-de-estructura/eliminar/:id" component={TiposDeEstructura} exact/>
              <PrivateRoute path="/tipos-de-estructura/:id" component={TipoDeEstructura} exact/>
              <PrivateRoute path="/tipos-de-estructura/:id/editar/single" component={TipoDeEstructura} exact/>
              <PrivateRoute path="/tipos-de-estructura/:id/eliminar/single" component={TipoDeEstructura} exact/>
              <Route component={NotFound} />
            </Switch>
            <PrivateRoute path="/:elemento/agregar" component={PopUpAdd} exact/>
            <PrivateRoute path="/:elemento/:id/eliminar/:single" component={PopUpRemove} exact/>
            <PrivateRoute path="/:elemento/eliminar/:id" component={PopUpRemove} exact/>
            <PrivateRoute path="/:elemento/:id/editar/:single" component={PopUpEdit} exact/>
            <PrivateRoute path="/:elemento/editar/:id" component={PopUpEdit} exact/>
          </div>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';

import Home from './views/home';
import Estructuras from './views/estructuras';
import Estructura from './views/estructura';
import Login from './views/login';


function App() {
  return (
    <div className="App container">
      <Router>
        <Nav/>
        <div className="appContent">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/estructuras" component={Estructuras} exact/>
            <Route path="/estructuras/:id" component={Estructura} exact/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

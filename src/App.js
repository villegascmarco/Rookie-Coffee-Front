import React from 'react'
import Index from './componentes/Index/Index.jsx'
import SideBar from './componentes/Hamburguesa/sidebar.jsx'
import Login from './componentes/Login/Login.jsx'
import ContenedorProducto from './componentes/Productos/ContenedorProducto.jsx'
import ContenedorIngrediente from './componentes/Ingredientes/ContenedorIngrediente.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <SideBar pageWrapId={"container"} outerContainerId={"App"} />
    <div className="container">
      <Router>
      <Switch>
          <Route path="/Venta">
            
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Productos">
            <ContenedorProducto />
          </Route>
          <Route path="/Ingredientes">
            <ContenedorIngrediente />
          </Route>
          <Route path="/Empleados">
            
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;

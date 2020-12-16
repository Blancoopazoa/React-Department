import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from "./componentes/pages/Home";
import Navbar from "./componentes/Home/Navbar";
import Routes from "./Routes";
import Login from "./containers/LandingPageView";
import Products from "./componentes/pages/Products";
import services from "./componentes/pages/Services";

//importacion libreria de diseño
import 'antd/dist/antd.css'; 


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/Routes" exact component={Routes} />
      <Route path="/Login" exact component={Login} />
      </Switch>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Products" exact component={Products} />
        <Route path="/services" exact component={services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

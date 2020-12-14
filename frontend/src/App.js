import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from "./componentes/pages/Home";
import Navbar from "./componentes/Home/Navbar";
import Routes from "./Routes"; 

//importacion libreria de diseño
import 'antd/dist/antd.css'; 


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/Routes" exact component={Routes} />
      </Switch>
        <Switch>
        <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

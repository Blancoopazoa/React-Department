import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import EmpleadoListView from './containers/ListEmpleadosView';
import DepartamentoListView from './containers/ListDepartamentoView';

//importacion libreria de diseño
import 'antd/dist/antd.css'; 

//importacion de Routas
import CustomLayout from './containers/Layout';



function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
        <Switch>
          <Route path="/empleados" component={EmpleadoListView} />
          <Route path="/departamentos" component={DepartamentoListView} />
        </Switch>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;

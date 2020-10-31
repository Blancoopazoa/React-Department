import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import EmpleadoListView from './containers/ListEmpleadosView';
import DepartamentoListView from './containers/ListDepartamentoView';
import ClienteListView from './containers/ListClienteView';
import InventarioListView from './containers/ListInventarioView';
import ReservasListView from './containers/ListReservasView';

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
          <Route path="/empleado" component={EmpleadoListView} />
          <Route path="/departamento" component={DepartamentoListView} />
          <Route path="/cliente" component={ClienteListView} />
          <Route path="/inventario" component={InventarioListView} />
          <Route path="/reserva" component={ReservasListView} />
        </Switch>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;

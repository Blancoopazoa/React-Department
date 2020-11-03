import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import EmpleadoListView from './containers/ListEmpleadosView';
import DepartamentoListView from './containers/ListDepartamentoView';
import ClienteListView from './containers/ListClienteView';
import InventarioListView from './containers/ListInventarioView';
import ReservasListView from './containers/ListReservasView';
<<<<<<< HEAD
import ServicesListView from './containers/ListServicesView';
=======
import LandingPage from './containers/LandingPageView';
>>>>>>> ad6221bc72c125658dfc77704838e09875dd78cd

//importacion libreria de diseño
import 'antd/dist/antd.css'; 

//importacion de Routas
import CustomLayout from './containers/Layout';



function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <CustomLayout>
          <Route path="/home" component={LandingPage} /> 
          <Route path="/empleado" component={EmpleadoListView} />
          <Route path="/departamento" component={DepartamentoListView} />
          <Route path="/cliente" component={ClienteListView} />
          <Route path="/inventario" component={InventarioListView} />
          <Route path="/reserva" component={ReservasListView} />
<<<<<<< HEAD
          <Route path="/servicios" component={ServicesListView} />
=======
          </CustomLayout>
>>>>>>> ad6221bc72c125658dfc77704838e09875dd78cd
        </Switch>
      </Router>
    </div>
  );
}

export default App;

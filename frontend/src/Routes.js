import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import EmpleadoListView from './containers/ListEmpleadosView';
import DepartamentoListView from './containers/ListDepartamentoView';
import ClienteListView from './containers/ListClienteView';
import InventarioListView from './containers/ListInventarioView';
import ReservasListView from './containers/ListReservasView';
import ServicesListView from './containers/ListServicesView';
import LandingPage from './containers/LandingPageView';
import CheckInListView from './containers/ListCheckInView'
import CheckOutListView from './containers/ListCheckOutView'

//importacion libreria de diseño
import 'antd/dist/antd.css'; 

//importacion de Routas
import CustomLayout from './containers/Layout';



function Rutas() {
  return (
    <div className="Rutas">
    
      <Router>
        <Switch>
          <CustomLayout>
          <Route path="/home" component={LandingPage} /> 
          <Route path="/empleado" component={EmpleadoListView} />
          <Route path="/departamento" component={DepartamentoListView} />
          <Route path="/cliente" component={ClienteListView} />
          <Route path="/inventario" component={InventarioListView} />
          <Route path="/reserva" component={ReservasListView} />
          <Route path="/servicios" component={ServicesListView} />
          <Route path="/checkin" component={CheckInListView}/>
          <Route path="/checkout" component={CheckOutListView}/>
          </CustomLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default Rutas;

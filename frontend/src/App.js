import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

//importacion libreria de diseño
import 'antd/dist/antd.css'; 

//importacion de Routas
import CustomLayout from './containers/Layout';



function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;

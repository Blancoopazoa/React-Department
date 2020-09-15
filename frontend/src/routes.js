import React from 'react';
import { Route } from 'react-router-dom';

import EmpleadoListView from './containers/ListEmpleadosView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={EmpleadoListView} />
    </div>
)

export default BaseRouter;
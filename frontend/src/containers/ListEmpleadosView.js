import React from 'react';
import axios from 'axios';

import ListEmpleados from '../components/ListEmpleados';
import CustomForm from '../components/FormEmployee';

class EmpleadoListView extends React.Component {

    state = {
      reservas: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/empleados/')
          .then(res => {
            this.setState({
              reservas: res.data
            })
            console.log(res.data)
          })
    }

    render() {
        return (
            <div>
              <h2>Crear Empleado</h2>
            <CustomForm 
              requestType="post"
              btnText="Crear"
            />
            <br />
            <ListEmpleados data={this.state.reservas} />
            </div>
        )
    }
}

export default EmpleadoListView;
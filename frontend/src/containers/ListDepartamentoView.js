import React from 'react';
import axios from 'axios';

import ListDepartamentos from '../components/ListDepartamentos';
import CustomFormDepa from '../components/FormDepartamentos';

class DepartamentoListView extends React.Component {

    state = {
      reservas: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/departamento/')
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
              <h2>Crear Departamento</h2>
            <CustomFormDepa 
              requestType="post"
              btnText="Crear"
            />
            <br />
            <ListDepartamentos data={this.state.reservas} />
            </div>
        )
    }
}

export default DepartamentoListView;
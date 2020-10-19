import React from 'react';
import axios from 'axios';

import ListInventario from '../components/ListInventario';
import CustomFormInv from '../components/FormInventario';

class InventarioListView extends React.Component {

    state = {
      reservas: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/inventario/')
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
              <h2>Crear Inventario</h2>
            <CustomFormInv 
              requestType="post"
              btnText="Crear"
            />
            <br />
            <ListInventario data={this.state.reservas} />
            </div>
        )
    }
}

export default InventarioListView;
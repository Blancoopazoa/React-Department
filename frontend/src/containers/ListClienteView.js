import React from 'react';
import axios from 'axios';

import ListCliente from '../components/ListCliente';

class ClienteListView extends React.Component {

    state = {
      reservas: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/clientes/')
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
            <ListCliente data={this.state.reservas} />
            </div>
        )
    }
}

export default ClienteListView;
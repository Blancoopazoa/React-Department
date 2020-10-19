import React from 'react';
import axios from 'axios';

import ListReservas from '../components/ListReservas';

class ReservasListView extends React.Component {

    state = {
      reservas: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/reserva/')
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
            <ListReservas data={this.state.reservas} />
            </div>
        )
    }
}

export default ReservasListView;
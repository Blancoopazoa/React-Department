import React from 'react';
import axios from 'axios';

import { Button, Card } from "antd";
import CustomForm from '../components/FormEmployee';



class EmpleadoDetail extends React.Component {
    state = {
      empleado: {}
    };
  
    componentDidMount() {
      const details = this.props.match.params.details;
      axios.get(`http://127.0.0.1:8000/api/empleados/${details}`).then(res => {
        this.setState({
          empleado: res.data
        });
      });
    }
  
    handleDelete = event => {
      event.preventDefault();
      const details = this.props.match.params.details;
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
      };
      axios.delete(`http://127.0.0.1:8000/api/empleados/${details}/delete/`)
      .then(res => {
        if (res.status === 204) {
          this.props.history.push(`/`);
        }
      })
    };
  
    render() {
      return (
        <div>
          <Card Rut={this.state.empleado.Rut}>
            <p> {this.state.empleado.Nombre} </p>
          </Card>
          <CustomForm
            {...this.props}
            token={this.props.token}
            requestType="put"
            details={this.props.match.params.details}
            btnText="Update"
          />
          <form onSubmitCapture={this.handleDelete}>
            <Button type="danger" htmlType="submit">
              Delete
            </Button>
          </form>
        </div>
      );
    }
  }

  export default EmpleadoDetail;
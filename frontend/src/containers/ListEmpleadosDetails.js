import React from 'react';
import axios from 'axios';

import { Button, Card } from "antd";
import CustomForm from '../components/FormEmployee';



class EmpleadoDetail extends React.Component {
    state = {
      article: {}
    };
  
    componentDidMount() {
      const ID = this.props.match.params.ID;
      axios.get(`http://127.0.0.1:8000/empleados/${ID}`).then(res => {
        this.setState({
          empleado: res.data
        });
      });
    }
  
    handleDelete = event => {
      event.preventDefault();
      const ID = this.props.match.params.ID;
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
      };
      axios.delete(`http://127.0.0.1:8000/empleados/${ID}/delete/`)
      .then(res => {
        if (res.status === 204) {
          this.props.history.push(`/`);
        }
      })
    };
  
    render() {
      return (
        <div>
          <Card title={this.state.article.title}>
            <p> {this.state.article.content} </p>
          </Card>
          <CustomForm
            {...this.props}
            token={this.props.token}
            requestType="put"
            ID={this.props.match.params.ID}
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
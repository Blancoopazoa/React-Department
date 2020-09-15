import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

//Post y put Crud Para Empleado
class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, ID) => {
        event.preventDefault();
        const Rut = event.target.elements.Rut.value;
        const Nombre = event.target.elements.Nombre.value;
        const Apellido = event.target.elements.Apellido.value;
        const Correo = event.target.elements.Correo.value;
      

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/empleados/', {
                    Rut: Rut,
                    Nombre: Nombre,
                    Apellido: Apellido,
                    Correo: Correo
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/empleados/${ID}`, {
                    Rut: Rut,
                    Nombre: Nombre,
                    Apellido: Apellido,
                    Correo: Correo
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            
        }
    }



 render(){
  return (
    <>
      <Form onSubmitCapture={(event) => this.handleFormSubmit(
          event, 
        this.props.requestType )}>
        <Form.Item label="Rut">
          <Input name="Rut" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Nombre">
          <Input name="Nombre" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Apellido">
          <Input name="Apellido" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Correo">
          <Input name="Correo" placeholder="input placeholder" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
        </Form.Item>
      </Form>
    </>
  );
}
};

export default CustomForm;
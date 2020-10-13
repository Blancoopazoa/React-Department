import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

//Post y put Crud Para Empleado
class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, ID) => {
        event.preventDefault();
        const Rut = event.target.elements.rut.value;
        const Nombre = event.target.elements.nombre.value;
        const Apellido_p = event.target.elements.apellido_p.value;
        const Correo = event.target.elements.correo.value;

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/empleados/', {
                    rut: Rut,
                    nombre: Nombre,
                    apellido_p: Apellido_p,
                    correo: Correo
                },{
                  withCredentials: true,
                  headers: {'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'pust':
                return axios.put(`http://127.0.0.1:8000/empleados/${ID}`, {
                    rut: Rut,
                    nombre: Nombre,
                    apellido_p: Apellido_p,
                    correo: Correo
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
          <Input name="rut" placeholder="Ingresar Rut" />
        </Form.Item>
        <Form.Item label="Nombre">
          <Input name="nombre" placeholder="Ingresar Nombre" />
        </Form.Item>
        <Form.Item label="Apellido Paterno">
          <Input name="apellido_p" placeholder="Ingresar Apellido" />
        </Form.Item>
        <Form.Item label="Correo">
          <Input name="correo" placeholder="Ingresar Correo" />
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
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

//Post y put Crud Para Departamentos
class CustomFormDepa extends React.Component {

    handleFormSubmit = (event, requestType) => {
        event.preventDefault();
        const N_ROL = event.target.elements.n_rol.value;
        const N_BANOS= event.target.elements.n_banos.value;
        const N_HABITACIONES = event.target.elements.apellido_p.value;
        const DESC_HABITACION = event.target.elements.desc_habitacion.value;
        const PRECIO_DIA = event.target.elements.precio_dia.value;
        const N_DEPARTAMETO = event.target.elements.desc_habitacion.value;
      

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/departamento/', {
                    n_rol: N_ROL,
                    n_banos: N_BANOS,
                    n_habitaciones: N_HABITACIONES,
                    desc_habitacion: DESC_HABITACION,
                    precio_dia: PRECIO_DIA,
                    n_departameto: N_DEPARTAMETO
                },{
                  withCredentials: true,
                  headers: {'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
            case 'put':
                return axios.put('http://127.0.0.1:8000/departamento/', {
                    n_rol: N_ROL,
                    n_banos: N_BANOS,
                    n_habitaciones: N_HABITACIONES,
                    desc_habitacion: DESC_HABITACION,
                    precio_dia: PRECIO_DIA,
                    n_departameto: N_DEPARTAMETO
                },{
                  withCredentials: true,
                  headers: {'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
            
        }
    }



 render(){
  return (
    <>
      <Form onSubmitCapture={(event) => this.handleFormSubmit(
          event, 
        this.props.requestType )}>
        <Form.Item label="Rol">
          <Input name="n_rol" placeholder="Ingresar Número Rol" />
        </Form.Item>
        <Form.Item label="Baños">
          <Input name="n_banos" placeholder="Ingresar Número de Baños" />
        </Form.Item>
        <Form.Item label="Número de habitaciones">
          <Input name="n_habitaciones" placeholder="Ingresar Número de Habitacion" />
        </Form.Item>
        <Form.Item label="Desc_Habitación">
          <Input name="desc_habitacion" placeholder="Ingresar DESC_HABITACION" />
        </Form.Item>
        <Form.Item label="Precio">
          <Input name="precio_dia" placeholder="Ingresar Precio del Dia" />
        </Form.Item>
        <Form.Item label="Número de Departamentos">
          <Input name="n_departameto" placeholder="Ingresar Número de Departamento" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
        </Form.Item>
      </Form>
    </>
  );
}
};

export default CustomFormDepa;
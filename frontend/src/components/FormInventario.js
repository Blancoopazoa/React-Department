import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

//Post y put Crud Para Empleado
class CustomFormInv extends React.Component {

    handleFormSubmit = (event, requestType) => {
        event.preventDefault();
        const Id_inventario = event.target.elements.id_inventario.value;
        const Producto = event.target.elements.producto.value;
        const Valor = event.target.elements.valor.value;
        const Estado = event.target.elements.estado.value;
        const Cantidad = event.target.elements.cantidad.value;
        const Departamento_n_rol = event.target.elements.departamento_n_rol.value;
      

        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/inventario/', {
                    id_inventario: Id_inventario,
                    producto: Producto,
                    valor: Valor,
                    estado: Estado,
                    cantidad: Cantidad,
                    departamento_n_rol: Departamento_n_rol
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
                return axios.put('http://127.0.0.1:8000/inventario/', {
                  id_inventario: Id_inventario,
                  producto: Producto,
                  valor: Valor,
                  estado: Estado,
                  cantidad: Cantidad,
                  departamento_n_rol: Departamento_n_rol
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
        <Form.Item label="Id Inventario">
          <Input name="id_inventario" placeholder="Ingresar id inventario" />
        </Form.Item>
        <Form.Item label="Producto">
          <Input name="producto" placeholder="Ingresar Producto" />
        </Form.Item>
        <Form.Item label="Valor">
          <Input name="valor" placeholder="Ingresar Valor" />
        </Form.Item>
        <Form.Item label="Estado">
          <Input name="estado" placeholder="Ingresar Estado" />
        </Form.Item>
        <Form.Item label="Cantidad">
          <Input name="cantidad" placeholder="Ingresar Cantidad" />
        </Form.Item>
        <Form.Item label="Departamento_n_rol">
          <Input name="departamento_n_rol" placeholder="Ingresar Departamento_n_rol" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
        </Form.Item>
      </Form>
    </>
  );
}
};

export default CustomFormInv;
import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Rut',
    dataIndex: 'rut',
    key: 'rut',
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellido Paterno',
    dataIndex: 'apellido_p',
    key: 'apellido_p',
  },
  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 'correo',
  },
  {
    title: 'Acciones',
    dataIndex: 'acciones',
    key: 'acciones',
    render: fila => <> <Button type="primary">Editar</Button>{"   "} <Button type="primary" danger>Eliminar</Button></>
  },
];

const ListEmpleados = (props) => {
    return (
    <Table dataSource={props.data} columns={columns} />
    )
}

export default ListEmpleados;
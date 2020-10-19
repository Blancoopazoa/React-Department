import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Rut Pasaporte',
    dataIndex: 'rut_pasaporte',
    key: 'rut_pasaporte',
  },
  {
    title: 'Celular',
    dataIndex: 'cel',
    key: 'cel',
  },
  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 'correo',
  },
  {
    title: 'Nacimiento',
    dataIndex: 'nacimineto',
    key: 'nacimineto',
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
    title: 'Apellido Materno',
    dataIndex: 'apellido_m',
    key: 'apellido_m',
  },
  {
    title: 'Acciones',
    dataIndex: 'acciones',
    key: 'acciones',
    render: fila => <> <Button type="primary">Editar</Button>{"   "} <Button type="primary" danger>Eliminar</Button></>
  },
];

const ListCliente = (props) => {
    return (
    <Table dataSource={props.data} columns={columns} />
    )
}

export default ListCliente;
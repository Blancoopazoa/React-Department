import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Rol',
    dataIndex: 'n_rol',
    key: 'n_rol',
  },
  {
    title: 'Baños',
    dataIndex: 'n_banos',
    key: 'n_banos',
  },
  {
    title: 'Habitaciones',
    dataIndex: 'n_habitaciones',
    key: 'n_habitaciones',
  },
  {
    title: 'Desc_Habitación',
    dataIndex: 'desc_habitacion',
    key: 'desc_habitacion',
  },
  {
    title: 'Precio',
    dataIndex: 'precio_dia',
    key: 'precio_dia',
  },
  {
    title: 'Departamentos',
    dataIndex: 'n_departameto',
    key: 'n_departameto',
  },
  {
    title: 'Comuna',
    dataIndex: 'comuna_id_comuna',
    key: 'comuna_id_comuna',
  },
  {
    title: 'Acciones',
    dataIndex: 'acciones',
    key: 'acciones',
    render: fila => <> <Button type="primary">Editar</Button>{"   "} <Button type="primary" danger>Eliminar</Button></>
  },
];

const ListDepartamento = (props) => {
    return (
    <Table dataSource={props.data} columns={columns} />
    )
}

export default ListDepartamento;
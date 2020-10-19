import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Id inventario',
    dataIndex: 'id_inventario',
    key: 'id_inventario',
  },
  {
    title: 'Producto',
    dataIndex: 'producto',
    key: 'producto',
  },
  {
    title: 'Valor',
    dataIndex: 'valor',
    key: 'valor',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
  {
    title: 'Cantidad',
    dataIndex: 'cantidad',
    key: 'cantidad',
  },
  {
    title: 'Departamento_n_rol',
    dataIndex: 'departamento_n_rol',
    key: 'departamento_n_rol',
  },
  {
    title: 'Acciones',
    dataIndex: 'acciones',
    key: 'acciones',
    render: fila => <> <Button type="primary">Editar</Button>{"   "} <Button type="primary" danger>Eliminar</Button></>
  },
];

const ListInventario = (props) => {
    return (
    <Table dataSource={props.data} columns={columns} />
    )
}

export default ListInventario;
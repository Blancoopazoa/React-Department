import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Id Reservas',
    dataIndex: 'id_reserva',
    key: 'id_reserva',
  },
  {
    title: 'Fecha de Llegada',
    dataIndex: 'fecha_llegada',
    key: 'fecha_llegada',
  },
  {
    title: 'Departamento Numero de Rol',
    dataIndex: 'departamento_n_rol',
    key: 'departamento_n_rol',
  },
  {
    title: 'Pago',
    dataIndex: 'pago_id_pago',
    key: 'pago_id_pago',
  },
  {
    title: 'Cliente Rut Pasaporte',
    dataIndex: 'cliente_rut_pasaporte',
    key: 'cliente_rut_pasaporte',
  },
  {
    title: 'Acciones',
    dataIndex: 'acciones',
    key: 'acciones',
    render: fila => <> <Button type="primary">Editar</Button>{"   "} <Button type="primary" danger>Eliminar</Button></>
  },
];

const ListReservas = (props) => {
    return (
    <Table dataSource={props.data} columns={columns} />
    )
}

export default ListReservas;
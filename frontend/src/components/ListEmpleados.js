import React from 'react';
import { List, Card } from 'antd';

const ListEmpleados = (props) => {
    return (
<List
    grid={{ gutter: 16, column: 4 }}
    dataSource={props.data}
    renderItem={item => (
      <List.Item
        key={item.title}
      >
        
        <Card> 
        Rut:{item.rut}
        <br/>
        Nombre:{item.nombre}
        <br/>
        Apellido:{item.apellido_p}
        <br/>
        Correo:{item.correo}
        </Card>
      </List.Item>
    )}
  />
    )
}

export default ListEmpleados;
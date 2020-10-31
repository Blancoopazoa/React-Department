import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/inventario/";

class Employess extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id_inventario: '',
    producto: '',
    valor: '',
    estado: '',
    cantidad: '',
    departamento_n_rol: ''
  }
}



peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
},{
  withCredentials: true,
    headers: {'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  },{
    withCredentials: true,
    headers: {'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS' },
  }).catch(error=>{
    console.log(error.message);
  })
  .then(res => console.log(res))
  .catch(error => console.error(error));
}

peticionPut=()=>{
    axios.put(url+this.state.form.id_inventario+"/", this.state.form).then(response=>{
         this.modalInsertar();
    this.peticionGet();
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

peticionDelete=()=>{
  axios.delete(url+this.state.form.id_inventario).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
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

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarInventario=(inventario)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id_inventario: inventario.id_inventario,
      producto: inventario.producto,
      valor: inventario.valor,
      estado: inventario.estado,
      cantidad: inventario.cantidad,
      departamento_n_rol: inventario.departamento_n_rol
    }
  })
}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <br /><br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Inventario</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>Id inventario</th>
          <th>Producto</th>
          <th>Valor</th>
          <th>Estado</th>
          <th>Cantidad</th>
          <th>Departamento N rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(inventario=>{
          return(
            <tr>
          <td>{inventario.id_inventario}</td>
          <td>{inventario.producto}</td>
          <td>{inventario.valor}</td>
          <td>{inventario.estado}</td>
          <td>{inventario.cantidad}</td>
          <td>{inventario.departamento_n_rol}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarInventario(inventario); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarInventario(inventario); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
          </tr>
          )
        })}
      </tbody>
    </table>



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                  <label htmlFor="id_inventario">Id inventario</label>
                    <input className="form-control" type="text" name="id_inventario" id="id_inventario" onChange={this.handleChange} value={form?form.id_inventario: ''}/>
                    <label htmlFor="producto">Producto</label>
                    <input className="form-control" type="text" name="producto" id="producto" onChange={this.handleChange} value={form?form.producto: ''}/>
                    <br />
                    <label htmlFor="valor">Valor</label>
                    <input className="form-control" type="text" name="valor" id="valor" onChange={this.handleChange} value={form?form.valor: ''}/>
                    <br />
                    <label htmlFor="estado">Estado</label>
                    <input className="form-control" type="text" name="estado" id="estado" onChange={this.handleChange} value={form?form.estado: ''}/>
                    <br />
                    <label htmlFor="cantidad">Cantidad</label>
                    <input className="form-control" type="text" name="cantidad" id="cantidad" onChange={this.handleChange} value={form?form.cantidad:''}/>
                    <br/>
                    <label htmlFor="departamento_n_rol">Departamento N Rol</label>
                    <input className="form-control" type="text" name="departamento_n_rol" id="departamento_n_rol" onChange={this.handleChange} value={form?form.departamento_n_rol:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar el inventario {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default Employess;
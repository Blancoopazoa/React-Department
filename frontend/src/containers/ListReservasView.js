import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/reserva/";

class Employess extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id_reserva: '',
    fecha_llegada: '',
    departamento_n_rol: '',
    pago_id_pago: '',
    cliente_rut_pasaporte: ''
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
    axios.put(url+this.state.form.id_reserva+"/", this.state.form).then(response=>{
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
  axios.delete(url+this.state.form.id_reserva).then(response=>{
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

seleccionarReservas=(reservas)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id_reserva: reservas.id_reserva,
      fecha_llegada: reservas.fecha_llegada,
      departamento_n_rol: reservas.departamento_n_rol,
      pago_id_pago: reservas.pago_id_pago,
      cliente_rut_pasaporte: reservas.cliente_rut_pasaporte
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
    <h1>Reservas</h1>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>Id Reserva</th>
          <th>Fecha Llegada</th>
          <th>Departamento N Rol</th>
          <th>Id Pago</th>
          <th>Cliente Rut Pasaporte</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(reservas=>{
          return(
            <tr>
          <td>{reservas.id_reserva}</td>
          <td>{reservas.fecha_llegada}</td>
          <td>{reservas.departamento_n_rol}</td>
          <td>{reservas.pago_id_pago}</td>
          <td>{reservas.cliente_rut_pasaporte}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarReservas(reservas); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarReservas(reservas); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                  <label htmlFor="id_reserva">Id Reserva</label>
                    <input className="form-control" type="text" name="id_reserva" id="id_reserva" onChange={this.handleChange} value={form?form.id_reserva: ''}/>
                    <label htmlFor="fecha_llegada">Fecha Llegada</label>
                    <input className="form-control" type="text" name="fecha_llegada" id="fecha_llegada" onChange={this.handleChange} value={form?form.fecha_llegada: ''}/>
                    <br />
                    <label htmlFor="departamento_n_rol">Departamento N Rol</label>
                    <input className="form-control" type="text" name="departamento_n_rol" id="departamento_n_rol" onChange={this.handleChange} value={form?form.departamento_n_rol: ''}/>
                    <br />
                    <label htmlFor="pago_id_pago">Id Pago</label>
                    <input className="form-control" type="text" name="pago_id_pago" id="pago_id_pago" onChange={this.handleChange} value={form?form.pago_id_pago: ''}/>
                    <br />
                    <label htmlFor="cliente_rut_pasaporte">Cliente Rut Pasaporte</label>
                    <input className="form-control" type="text" name="cliente_rut_pasaporte" id="cliente_rut_pasaporte" onChange={this.handleChange} value={form?form.cliente_rut_pasaporte:''}/>
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
               Estás seguro que deseas eliminar el reservas {form && form.nombre}
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
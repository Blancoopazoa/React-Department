import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/reserva/";
const url1="http://127.0.0.1:8000/checkins/";

class Employess extends Component {
state={
  data:[],
  modalCheckin: false,
  form:{
    id_chek_in:'',
    fecha_llegada:'',
    estado_hbitacion:'',
    departamento_n_rol:'',
    empleado_rut: ''
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
 await axios.post(url1,this.state.form).then(response=>{
    this.modalCheckin();
    //this.peticionGet();
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
    axios.put(url1+this.state.form.id_check_in+"/", this.state.form).then(response=>{
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

modalCheckin=()=>{
  this.setState({modalCheckin: !this.state.modalCheckin});
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
    <h1>Reservas Pendientes</h1>
  <br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalCheckin()}}>Confirmar Check In</button>

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
            <button className="btn btn-secondary" onClick={()=>{this.modalCheckin(reservas); this.modalCheckin()}}><FontAwesomeIcon icon={faAddressBook}/> </button>
             </td>
                
          </tr>
          )
        })}
      </tbody>
    </table>



   
          <Modal isOpen={this.state.modalCheckin}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalCheckin()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id_checkin">Id Check In</label>
                    <input className="form-control" type="text" name="id_chek_in" id="id_chek_in" onChange={this.handleChange} value={form?form.id_chek_in:''}/>
                    <br/>
                    <label htmlFor="fecha_llegada">Fecha Llegada</label>
                    <input className="form-control" type="text" name="fecha_llegada" id="fecha_llegada" onChange={this.handleChange} value={form?form.fecha_llegada:''}/>
                    <br />
                    <label htmlFor="estado_hbitacion">Estado Habitacion</label>
                    <input className="form-control" type="text" name="estado_hbitacion" id="estado_hbitacion" onChange={this.handleChange} value={form?form.estado_hbitacion:''}/>
                    <br />
                    <label htmlFor="departamento_n_rol">Departamento N Rol</label>
                    <input className="form-control" type="text" name="departamento_n_rol" id="departamento_n_rol" onChange={this.handleChange} value={form?form.departamento_n_rol:''}/>
                    <br />
                    <label htmlFor="empleado_rut">Rut Empleado</label>
                    <input className="form-control" type="text" name="empleado_rut" id="empleado_rut" onChange={this.handleChange} value={form?form.empleado_rut:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                </button>: 
                <button className="btn btn-primary" onClick={()=>this.peticionPost()}>
                    Ingresar Check In
                </button>
  }
                <button className="btn btn-danger" onClick={()=>this.modalCheckin()}>Cancelar</button>
                </ModalFooter>
          </Modal>

  </div>



  );
}
}
export default Employess;
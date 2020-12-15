
import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const url1="http://127.0.0.1:8000/checkins/";
const url2="http://127.0.0.1:8000/checkouts/";

class Employess extends Component {
state={
  data:[],
  modalCheckout: false,
  form:{
    id_chek_out:'',
    estado_entrega:'',
    empleado_rut:'',
    pago_id_pago:'',
    departamento_n_rol: ''
  }
}





peticionGet=()=>{
axios.get(url1).then(response=>{
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
 await axios.post(url2,this.state.form).then(response=>{
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
  axios.delete(url1+this.state.form.id_reserva).then(response=>{
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

modalCheckout=()=>{
  this.setState({modalCheckout: !this.state.modalCheckout});
}

seleccionarCheckin=(checkin)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id_check_in: checkin.id_chek_in,
      fecha_llegada: checkin.fecha_llegada,
      estado_hbitacion: checkin.estado_hbitacion,
      departamento_n_rol: checkin.departamento_n_rol,
      empleado_rut: checkin.empleado_rut
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
    <h1>Check In </h1>
  <br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalCheckout()}}>Confirmar Check Out</button>

    <table className="table ">
      <thead>
        <tr>
          <th>Id Check IN</th>
          <th>Fecha Llegada</th>
          <th>Estado Habitacion</th>
          <th>Departamento N Rol</th>
          <th>Rut Empleado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(checkin=>{
          return(
            <tr>
          <td>{checkin.id_chek_in}</td>
          <td>{checkin.fecha_llegada}</td>
          <td>{checkin.estado_hbitacion}</td>
          <td>{checkin.departamento_n_rol}</td>
          <td>{checkin.empleado_rut}</td>
          <td>
            <button className="btn btn-secondary" onClick={()=>{this.modalCheckout(checkin); this.modalCheckout()}}><FontAwesomeIcon icon={faAddressBook}/> </button>
             </td>
                
          </tr>
          )
        })}
      </tbody>
    </table>



   
          <Modal isOpen={this.state.modalCheckout}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalCheckout()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id_checkin">Id Check Out</label>
                    <input className="form-control" type="text" name="id_chek_out" id="id_chek_out" onChange={this.handleChange} value={form?form.id_chek_out:''}/>
                    <br/>
                    <label htmlFor="fecha_llegada">Estado Entrega</label>
                    <input className="form-control" type="text" name="estado_entrega" id="estado_entrega" onChange={this.handleChange} value={form?form.estado_entrega:''}/>
                    <br />
                    <label htmlFor="fecha_llegada">Rut Empleado</label>
                    <input className="form-control" type="text" name="empleado_rut" id="empleado_rut" onChange={this.handleChange} value={form?form.empleado_rut:''}/>
                    <br />
                    <label htmlFor="estado_hbitacion">ID Pago</label>
                    <input className="form-control" type="text" name="pago_id_pago" id="pago_id_pago" onChange={this.handleChange} value={form?form.pago_id_pago:''}/>
                    <br />
                    <label htmlFor="departamento_n_rol">Departamento N Rol</label>
                    <input className="form-control" type="text" name="departamento_n_rol" id="departamento_n_rol" onChange={this.handleChange} value={form?form.departamento_n_rol:''}/>
                    <br />
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                </button>: 
                <button className="btn btn-primary" onClick={()=>this.peticionPost()}>
                    Ingresar Check Out
                </button>
  }
                <button className="btn btn-danger" onClick={()=>this.modalCheckout()}>Cancelar</button>
                </ModalFooter>
          </Modal>

  </div>



  );
}
}
export default Employess;
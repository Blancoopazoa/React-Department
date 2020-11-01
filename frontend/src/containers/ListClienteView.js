import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/clientes/";

class Employess extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    rut_pasaporte: '',
    cel: '',
    correo: '',
    nacimineto: '',
    nombre: '',
    apellido_m: '',
    apellido_p: ''
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
    axios.put(url+this.state.form.rut_pasaporte+"/", this.state.form).then(response=>{
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
  axios.delete(url+this.state.form.rut_pasaporte).then(response=>{
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

seleccionarCliente=(cliente)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      rut_pasaporte: cliente.rut_pasaporte,
      cel: cliente.cel,
      correo: cliente.correo,
      nacimineto: cliente.nacimineto,
      nombre: cliente.nombre,
      apellido_m: cliente.apellido_m,
      apellido_p: cliente.apellido_p
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
    <h1>Clientes</h1>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>Rut Pasaporte</th>
          <th>Cel</th>
          <th>Correo</th>
          <th>Nacimineto</th>
          <th>Nombre</th>
          <th>Apellido Materno</th>
          <th>Apellido Paterno</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(cliente=>{
          return(
            <tr>
          <td>{cliente.rut_pasaporte}</td>
          <td>{cliente.cel}</td>
          <td>{cliente.correo}</td>
          <td>{cliente.nacimineto}</td>
          <td>{cliente.nombre}</td>
          <td>{cliente.apellido_m}</td>
          <td>{cliente.apellido_p}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarCliente(cliente); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarCliente(cliente); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                  <label htmlFor="rut_pasaporte">Rut Pasaporte</label>
                    <input className="form-control" type="text" name="rut_pasaporte" id="rut_pasaporte" onChange={this.handleChange} value={form?form.rut_pasaporte: ''}/>
                    <label htmlFor="cel">Cel</label>
                    <input className="form-control" type="text" name="cel" id="cel" onChange={this.handleChange} value={form?form.cel: ''}/>
                    <br />
                    <label htmlFor="correo">Correo</label>
                    <input className="form-control" type="email" name="correo" id="correo" onChange={this.handleChange} value={form?form.correo: ''}/>
                    <br />
                    <label htmlFor="nacimineto">Nacimineto</label>
                    <input className="form-control" type="text" name="nacimineto" id="nacimineto" onChange={this.handleChange} value={form?form.nacimineto: ''}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''}/>
                    <br/>
                    <label htmlFor="apellido_m">Apellido Materno</label>
                    <input className="form-control" type="text" name="apellido_m" id="apellido_m" onChange={this.handleChange} value={form?form.apellido_m:''}/>
                    <br/>
                    <label htmlFor="apellido_p">Apellido Paterno</label>
                    <input className="form-control" type="text" name="apellido_p" id="apellido_p" onChange={this.handleChange} value={form?form.apellido_p:''}/>
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
               Estás seguro que deseas eliminar el cliente {form && form.nombre}
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
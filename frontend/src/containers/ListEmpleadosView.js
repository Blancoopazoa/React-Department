import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const url="http://127.0.0.1:8000/empleados/";


class Employess extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    rut: '',
    nombre: '',
    apellido_p: '',
    correo: ''
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
    axios.put(url+this.state.form.id+"/", this.state.form).then(response=>{
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
  axios.delete(url+this.state.form.id).then(response=>{
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

seleccionarEmpleado=(empleado)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: empleado.id,
      rut: empleado.rut,
      nombre: empleado.nombre,
      apellido_p: empleado.apellido_p,
      correo: empleado.correo
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
    <h1>Empleados</h1>
    <br/>
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Empleado</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>Id</th>
          <th>Rut</th>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(empleado=>{
          return(
            <tr>
          <td>{empleado.id}</td>
          <td>{empleado.rut}</td>
          <td>{empleado.nombre}</td>
          <td>{empleado.apellido_p}</td>
          <td>{empleado.correo}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpleado(empleado); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpleado(empleado); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                  <label htmlFor="id">Id</label>
                    <input className="form-control" type="text" name="id" id="id" onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <label htmlFor="rut">Rut</label>
                    <input className="form-control" type="text" name="rut" id="rut" onChange={this.handleChange} value={form?form.rut: ''}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <label htmlFor="nombre">Apellido Paterno</label>
                    <input className="form-control" type="text" name="apellido_p" id="apellido_p" onChange={this.handleChange} value={form?form.apellido_p: ''}/>
                    <br />
                    <label htmlFor="nombre">correo</label>
                    <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form?form.correo:''}/>
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
               Estás seguro que deseas eliminar el empleado {form && form.nombre}
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

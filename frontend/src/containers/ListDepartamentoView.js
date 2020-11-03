import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/departamento/";

class Employess extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    n_rol: '',
    n_banos: '',
    n_habitaciones: '',
    desc_habitacion: '',
    precio_dia: '',
    n_departameto: '',
    comuna_id_comuna: ''
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
    axios.put(url+this.state.form.n_rol+"/", this.state.form).then(response=>{
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
  axios.delete(url+this.state.form.n_rol).then(response=>{
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

seleccionarDepartamento=(departamento)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      n_rol: departamento.n_rol,
      n_banos: departamento.n_banos,
      n_habitaciones: departamento.n_habitaciones,
      desc_habitacion: departamento.desc_habitacion,
      precio_dia: departamento.precio_dia,
      n_departameto: departamento.n_departameto,
      comuna_id_comuna: departamento.comuna_id_comuna
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
    <h1>Departamentos</h1>
    <br/>
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Departamento</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>N rol</th>
          <th>N banos</th>
          <th>N Habitaciones</th>
          <th>DESC Habitacion</th>
          <th>Precio Dia</th>
          <th>N Departamento</th>
          <th>ID Comuna</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(departamento=>{
          return(
            <tr>
          <td>{departamento.n_rol}</td>
          <td>{departamento.n_banos}</td>
          <td>{departamento.n_habitaciones}</td>
          <td>{departamento.desc_habitacion}</td>
          <td>{departamento.precio_dia}</td>
          <td>{departamento.n_departameto}</td>
          <td>{departamento.comuna_id_comuna}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarDepartamento(departamento); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarDepartamento(departamento); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
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
                  <label htmlFor="n_rol">N rol</label>
                    <input className="form-control" type="text" name="n_rol" id="n_rol" onChange={this.handleChange} value={form?form.n_rol: ''}/>
                    <label htmlFor="n_banos">N banos</label>
                    <input className="form-control" type="text" name="n_banos" id="n_banos" onChange={this.handleChange} value={form?form.n_banos: ''}/>
                    <br />
                    <label htmlFor="n_habitaciones">N habitaciones</label>
                    <input className="form-control" type="text" name="n_habitaciones" id="n_habitaciones" onChange={this.handleChange} value={form?form.n_habitaciones: ''}/>
                    <br />
                    <label htmlFor="desc_habitacion">Desc habitacion</label>
                    <input className="form-control" type="text" name="desc_habitacion" id="desc_habitacion" onChange={this.handleChange} value={form?form.desc_habitacion: ''}/>
                    <br />
                    <label htmlFor="precio_dia">Precio dia</label>
                    <input className="form-control" type="text" name="precio_dia" id="precio_dia" onChange={this.handleChange} value={form?form.precio_dia:''}/>
                    <br/>
                    <label htmlFor="n_departameto">N departameto</label>
                    <input className="form-control" type="text" name="n_departameto" id="n_departameto" onChange={this.handleChange} value={form?form.n_departameto:''}/>
                    <br/>
                    <label htmlFor="comuna_id_comuna">Id Comuna</label>
                    <input className="form-control" type="text" name="comuna_id_comuna" id="comuna_id_comuna" onChange={this.handleChange} value={form?form.comuna_id_comuna:''}/>
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
               Estás seguro que deseas eliminar el departamento {form && form.nombre}
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
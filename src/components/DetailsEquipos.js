import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global'
import { NavLink } from 'react-router-dom';

export default class DetailsEquipos extends Component {
    url=Global.apiFutbol;

    state={
        equipo:[]
    }

    loadDetails=()=>{
        let request="api/Equipos/"+this.props.idEquipo

        axios.get(this.url+request).then(response=>{
            console.log("Cargando equipos...")
            console.log(response.data)
            this.setState({
              equipo:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDetails();
    }
    componentDidUpdate=(oldProps)=>{
      if(oldProps.idEquipo != this.props.idEquipo){
        this.loadDetails();
      }
    }

  render() {
    
    return (
      <div className="container">
  <h1 className="text-center">Details Equipo: {this.props.idEquipo}</h1>

  <div className="row justify-content-center mt-4">
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
      <div className="card text-center">
        <img
          src={this.state.equipo.imagen}
          alt={this.state.equipo.nombre}
          className="card-img-top img-fluid mx-auto"
          style={{ maxHeight: "250px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Nombre: {this.state.equipo.nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Champions: {this.state.equipo.champions}
          </h6>

          {/* text-break asegura que palabras muy largas no rompan el diseño */}
          <p className="card-text text-break">
            Descripción: {this.state.equipo.descripcion}
          </p>

          <small className="text-secondary d-block mb-2">ID: {this.state.equipo.web}</small>

          <NavLink className="btn btn-success me-2" to={`/detailsjugadores/${this.props.idEquipo}`}>
            Jugadores
          </NavLink>
          <NavLink className="btn btn-info" to={"/"}>
            Volver
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</div>
)
  }
}

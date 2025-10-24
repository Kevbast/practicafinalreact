import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global'
import { NavLink } from 'react-router-dom';

export default class DetailsJugador extends Component {
    url=Global.apiFutbol;

    state={
        jugador:[]
    }

    loadDetails=()=>{
        let request="api/Jugadores/"+this.props.idJugador

        axios.get(this.url+request).then(response=>{
            console.log("Cargando equipos...")
            console.log(response.data)
            this.setState({
              jugador:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDetails();
    }
    componentDidUpdate=(oldProps)=>{
      if(oldProps.idJugador != this.props.idJugador){
        this.loadDetails();
      }
    }

  render() {
    return (
      <div className="container">
  <h1 className="text-center">Details Jugador: {this.props.idJugador}</h1>

  <div className="row justify-content-center mt-4">
  <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
    <div className="card text-center shadow-sm">
      <img
        src={this.state.jugador.imagen}
        alt={this.state.jugador.nombre}
        className="card-img-top img-fluid mx-auto"
        style={{ maxHeight: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{this.state.jugador.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Posición: {this.state.jugador.posicion}
        </h6>

        <p className="card-text mb-1">
          País: {this.state.jugador.pais}
        </p>
        <p className="card-text mb-1">
          Fecha de Nacimiento: {this.state.jugador.fechaNacimiento}
        </p>
        <p className="card-text">
          ID Equipo: {this.state.jugador.idEquipo}
        </p>

        <small className="text-secondary d-block mb-3">
          ID Jugador: {this.state.jugador.idJugador}
        </small>

        <NavLink className="btn btn-info" to={"/"}>Volver</NavLink>
      </div>
    </div>
  </div>
</div>

</div>
    )
  }
}

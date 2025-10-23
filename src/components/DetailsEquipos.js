import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global'

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
        })
    }
    componentDidMount=()=>{
        this.loadDetails();
    }

  render() {
    
    const c = this.state.equipo || {}
    return (
      <div>DetailsEquipos{this.props.idEquipo}
        <div className="card mb-3" style={{maxWidth: 540}}>
        <div className="row g-0 align-items-center">
          <div className="col-4">
            <img src={c.imagen} className="img-fluid rounded-start" alt={c.nombre} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title mb-1">{c.nombre} {c.campions}</h5>
              <p className="card-text text-muted mb-0">Descripción: {c.descripcion}</p>
              <small className="text-secondary">ID: {c.web}</small>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )
  }
}

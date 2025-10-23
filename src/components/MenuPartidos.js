import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './../Global'


export default class MenuPartidos extends Component {
  url=Global.apiFutbol;
    state={
        equipos:[]
    }

    loadEquipos=()=>{
        let request ="api/equipos"
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo equipos");
            this.setState({
                equipos:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadEquipos();
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Champions</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Apuestas</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Equipos
                </a>
                <ul className="dropdown-menu">
                  {//FUNCIÓN PARA VER LOS HOSPITALES Y OBTENER EL IDHOSPITAL PARA ENVIARLO A DOCTORES CON EL NAVLINK
                      this.state.equipos.map((equipo,index)=>{
                          return (<li className="nav-item" key={index} >
                              <NavLink className="dropdown-item" to={"/detailsequipo/"+equipo.idEquipo} >{equipo.nombre}</NavLink>
                          </li>)
                      })
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
  }
}

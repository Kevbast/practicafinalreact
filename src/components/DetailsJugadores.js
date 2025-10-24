import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global'
import { NavLink } from 'react-router-dom';

export default class DetailsJugadores extends Component {
    url=Global.apiFutbol;

    state={
        jugadores:[]
    }

    loadDetails=()=>{
        let request="api/Jugadores/JugadoresEquipos/"+this.props.idEquipo

        axios.get(this.url+request).then(response=>{
            console.log("Cargando juagdores...")
            console.log(response.data)
            this.setState({
              jugadores:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDetails();
    }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>DetailsJugadores</h1>
        <NavLink className="btn btn-success" to={"/"}>Volver</NavLink>
        <div className="table-responsive">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Detalles</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    this.state.jugadores.map((jugador,index)=>{
                        return(
                            <tr key={index}>
                                <td>{jugador.nombre}</td>
                                <td><img src={jugador.imagen}alt={jugador.nombre}className="card-img-top img-fluid mx-auto" style={{ height:"200px", width:"200px"}}/></td>
                                <td><NavLink className="btn btn-danger" to={"/detailsJugador/"+jugador.idJugador}>
                                            Details
                                          </NavLink></td>
                            </tr>)
                    })
                   }
                </tbody>
            </table>
        </div>       
      </div>
    )
  }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './../Global'

export default class Apuestas extends Component {

  url=Global.apiFutbol;
    state={
        apuestas:[]
    }

    loadApuestas=()=>{
        let request ="api/Apuestas"
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo apuestas....");
            this.setState({
                apuestas:response.data
            })
            console.log(response.data)
        })
    }
    componentDidMount=()=>{
        this.loadApuestas();
    }

    //borramos la apuesta por id
    deleteApuesta=(idApuesta)=>{
      let request="api/Apuestas/"+idApuesta;
      console.log("Apuesta "+idApuesta+" borrada!");
      axios.delete(this.url+request).then(response=>{
        this.loadApuestas();
      })
    }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>Apuestas</h1>
        <NavLink to={"/createapuesta"} className="btn btn-warning">Realizar apuesta</NavLink>
        <br/>
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Resultado</th>
                <th scope="col">Fecha</th>
                <th/>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.apuestas.map((apuesta,index)=>{
                    return(
                      <tr key={index}>
                          <td >{apuesta.usuario}</td>
                          <td >{apuesta.resultado}</td>
                          <td >{apuesta.fecha}</td>
                          <td >
                            <button className='btn btn-danger' onClick={()=>{
                              this.deleteApuesta(apuesta.idApuesta);       
                              }}>Eliminar</button>
                          </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
        
      </div>
    )
  }
}

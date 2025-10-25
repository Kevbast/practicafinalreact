import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom';

export default class CreateApuesta extends Component {
    url=Global.apiFutbol;
    cajaUsuario=React.createRef();
    cajaResultado=React.createRef();
    cajaFecha=React.createRef();

    state={
        status:false//para enviarlo a apuestas
    }

    insertarApuesta=(event)=>{
        event.preventDefault();
        console.log("Antes del servicio insert...");
        let request="api/Apuestas";
        //creamos el objeto
        let apuesta={
            usuario:this.cajaUsuario.current.value,
            resultado:this.cajaResultado.current.value,
            fecha:this.cajaFecha.current.value,
        }

        axios.post(this.url+request,apuesta).then(response=>{
            console.log("Apuesta insertada!")
            this.setState({
                status:true
            })
        })

    }

  render() {
    return (
      <div>
        {
            this.state.status==true &&
            <Navigate to="/apuestas"/>
        }
        <h1>Create Apuesta</h1>
        <form style={{width:"50%",margin:"10px"}}>

        <label>Usuario:</label>
        <input type="text" ref={this.cajaUsuario} className='form-control'/>
        <label>Resultado:</label>
        <input type="text" ref={this.cajaResultado} className='form-control'/>
        <label>Fecha:</label>
        <input type="text" ref={this.cajaFecha} className='form-control'/>
        <br/>
        <button onClick={this.insertarApuesta} className='btn btn-info'>Nueva apuesta</button>
        </form>

      </div>
    )
  }
}

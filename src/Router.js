import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuPartidos from './components/MenuPartidos'
import DetailsEquipos from './components/DetailsEquipos';
import DetailsJugadores from './components/DetailsJugadores';
import DetailsJugador from './components/DetailsJugador';
import Apuestas from './components/Apuestas'

export default class Router extends Component {
  render() {
    function DetailsElement(){
        let {idEquipo} =useParams();
        return <DetailsEquipos idEquipo={idEquipo}/>
    }

    function DetailsJugadoresElement(){
        let {idEquipo} =useParams();
        return <DetailsJugadores idEquipo={idEquipo}/>
    }

    function DetailsJugadorElement(){
        let {idJugador} =useParams();
        return <DetailsJugador idJugador={idJugador}/>
    }

    return (
      <BrowserRouter>
      <MenuPartidos/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/apuestas" element={<Apuestas/>} />
            <Route path="/detailsequipo/:idEquipo" element={<DetailsElement/>} />
            <Route path="/detailsjugadores/:idEquipo" element={<DetailsJugadoresElement/>} />
            <Route path="/detailsjugador/:idJugador" element={<DetailsJugadorElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

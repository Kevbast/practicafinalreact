import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuPartidos from './components/MenuPartidos'
import DetailsEquipos from './components/DetailsEquipos';

export default class Router extends Component {
  render() {
    function DetailsElement(){
        let {idEquipo} =useParams();
        return <DetailsEquipos idEquipo={idEquipo}/>
    }

    return (
      <BrowserRouter>
      <MenuPartidos/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detailsequipo/:idEquipo" element={<DetailsElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

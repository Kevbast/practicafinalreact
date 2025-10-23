import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuPartidos from './components/MenuPartidos'

export default class Router extends Component {
  render() {

    return (
      <BrowserRouter>
      <MenuPartidos/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import NavBar from './components/navbar/Navbar'
import Details from './components/Details/Details'
import Favorites from './components/Favorites/Favorites'
import About from './components/About/About'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      < NavBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/details/:id" element={<Details />} /> 
        <Route path="/favorites" element={<Favorites />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/Sign-in" element={<Login />} /> 
      </Routes>
    </>
  )
}

export default App

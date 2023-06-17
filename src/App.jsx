import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Abouts from './pages/Abouts'
import Notfound from './pages/Notfound'
import Header from './units/Header'

export default function App() {
  return (
  
      <>
    <Header/>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Abouts" element={<Abouts/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
    </>
  )
}

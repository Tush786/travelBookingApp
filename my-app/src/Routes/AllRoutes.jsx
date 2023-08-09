import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Component/Homepage'
import Service from '../Component/Service'
import Community from '../Component/Community'
import Login from '../Component/Login'
import Register from '../Component/Register'
import About from '../Component/About'
import Discover from '../Component/Discover'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/discover" element={<Discover/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/community" element={<Community/>}></Route>
        <Route path="/aboutus" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
    </Routes>
  )
}

export default AllRoutes



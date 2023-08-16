import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Component/Homepage'
import Login from '../Component/Login'
import Register from '../Component/Register'
import ProductDetail from '../Component/ProductDetail'
import Signup from '../Component/Signup'

const AllRoutes = () => {
  return (
    <>
     <Routes>
     <Route path='/' element={<Homepage/>}></Route>
     <Route path='/:id' element={<ProductDetail/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     </Routes> 
    </>
  )
}

export default AllRoutes



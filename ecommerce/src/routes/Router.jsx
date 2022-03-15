import React from 'react'

import { Route, Routes } from 'react-router-dom'


import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Shop from '../pages/Shop'
import Register from '../pages/Register'
import ResetPass from '../pages/ResetPass'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalog/:id' element={<Product/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Login' element={<Login/>}/>
           <Route path='/Register' element={<Register/>}/>
            <Route path='/ResetPass'element={<ResetPass/>}/>
        </Routes>
    )
}

export default Router

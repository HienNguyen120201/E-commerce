import React from 'react'

import { Route, Routes } from 'react-router-dom'


import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Shop from '../pages/Shop'

const Router = () => {
    return (
        <Routes>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/Cart' component={Cart}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Laptop' element={<Shop />}/>
        </Routes>
    )
}

export default Router

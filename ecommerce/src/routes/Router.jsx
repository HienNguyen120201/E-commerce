import React from 'react'

import { Route, Routes } from 'react-router-dom'


import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Shop from '../pages/Shop'
import Search from '../pages/Search'

const Router = () => {
    return (
        <Routes>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/Cart' component={Cart}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Laptop' element={<Shop />}/>
            <Route path='/Mobile' element={<Shop />}/>
            <Route path='/Accessory' element={<Shop />}/>
            <Route path='/Search/*' element={<Search />}/>
        </Routes>
    )
}

export default Router

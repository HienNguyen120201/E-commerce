import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Laptop from '../pages/Laptop'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Mobile from '../pages/Mobile'
import Accessory from '../pages/Accessory'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/Laptop' component={Laptop}/>
            <Route path='/Mobile' component={Mobile}/>
            <Route path='/Accessory' component={Accessory}/>
            <Route path='/Cart' component={Cart}/>
            <Route path='/Login' component={Login}/>
        </Switch>
    )
}

export default Routes

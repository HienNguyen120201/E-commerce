import React from "react"

import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Shop from "../pages/Shop"
import Register from "../pages/Register"
import ResetPass from "../pages/ResetPass"
import Search from "../pages/Search"
import Payment from "../pages/Payment"
import QRCodePayment from "../components/Payment/ScanQR"

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/Cart" element={<Cart />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/Register" element={<Register />} />
         <Route path="/ResetPass" element={<ResetPass />} />
         <Route path="/Laptop/*" element={<Shop />} />
         <Route path="/Mobile/*" element={<Shop />} />
         <Route path="/Accessory/*" element={<Shop />} />
         <Route path="/Search/*" element={<Search />} />
         <Route path="/Checkout" element={<Payment />} />
         <Route path="/Checkout/Payment" element={<QRCodePayment />} />
      </Routes>
   )
}

export default Router

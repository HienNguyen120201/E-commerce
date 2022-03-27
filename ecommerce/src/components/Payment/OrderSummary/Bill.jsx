import React from "react"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import { useState } from "react"
import "../../../css/PaymentStyle/Bill.css"

const Bill = () => {
   const cart = useSelector((state) => state.cartItems.value)
   //console.log(cart)
   const subTotal = cart.reduce((acc, ele) => acc + ele.unitPrice * ele.quantity, 0)
   console.log(subTotal)
   const [discount, setDiscount] = useState(0)
   const [tax, setTax] = useState(0)
   const [shipping, setShipping] = useState(0)
   const totalPrice = subTotal * (1 - discount) + tax + shipping
   return (
      <div className="bill-frame">
         <div className="bill">
            <Grid container className="info-bill">
               <Grid item>
                  <ul className="left-list">
                     <li>Sub total</li>
                     <li>Discount</li>
                     <li>Tax</li>
                     <li>Shipping</li>
                     <li>
                        <b>Total</b>
                     </li>
                  </ul>
               </Grid>
               <Grid item>
                  <ul className="right-list price">
                     <li>{subTotal.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</li>
                     <li>{discount}</li>
                     <li>{tax.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</li>
                     <li>{shipping.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</li>
                     <li>
                        <b>{totalPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</b>
                     </li>
                  </ul>
               </Grid>
            </Grid>
         </div>
      </div>
   )
}

export default Bill

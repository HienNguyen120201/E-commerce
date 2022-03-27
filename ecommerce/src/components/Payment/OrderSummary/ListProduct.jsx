import Grid from "@mui/material/Grid"
import React from "react"
import { useSelector } from "react-redux"
import "../../../css/PaymentStyle/ListProducts.css"

const ListProducts = () => {
   const cart = useSelector((state) => state.cartItems.value)
   return (
      <div className="list-products-checkout">
         <div className="list-products-checkout-child">
            <Grid container className="list-products-grid">
               <Grid item>
                  <h2>Products</h2>
                  <ol>
                     {cart.map((item, idx) => {
                        return (
                           <li key={idx}>
                              {item.name} x {item.quantity}
                           </li>
                        )
                     })}
                  </ol>
               </Grid>
               <Grid item>
                  <h2>Amount</h2>
                  <ul>
                     {cart.map((item, idx) => {
                        return (
                           <li key={idx}>
                              {(item.unitPrice * item.quantity).toLocaleString("it-IT", {
                                 style: "currency",
                                 currency: "VND",
                              })}
                           </li>
                        )
                     })}
                  </ul>
               </Grid>
            </Grid>
         </div>
      </div>
   )
}

export default ListProducts

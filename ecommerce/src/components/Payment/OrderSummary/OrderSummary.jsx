import React from "react"
import IncDecCounter from "./InDecCounter"
import Bill from "./Bill"
import ListProducts from "./ListProduct"
import "../../../css/PaymentStyle/OrderSummary.css"

const OrderSummary = () => {
   return (
      <div className="order-summary">
         <div className="top_1">
            <div className="order-summary-title">
               <h2>Order summary</h2>
            </div>
            <hr />
            <ListProducts />
            <hr />
            <div className="discountCode">Discount Code</div>
            <br />
            <form action="#">
               <div className="discount">
                  <input className="discountCode-field" type="text" />
                  <div>
                     <button type="butotn" className="apply">
                        Apply
                     </button>
                  </div>
               </div>
            </form>
         </div>

         <Bill />
      </div>
   )
}

export default OrderSummary

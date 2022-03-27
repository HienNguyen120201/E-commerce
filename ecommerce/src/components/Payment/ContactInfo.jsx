import React from "react"
import Grid from "@mui/material/Grid"
import { Link } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../css/PaymentStyle/ContactInfo.css"

const ContactInfo = (e) => {
   const [userInfo, setUserInfo] = useState({
      name: "",
      phone: "",
      email: "",
      address: "",
   })

   const CancelOrder = () => {
      useNavigate("/Cart")
   }
   console.log(window.location.pathname)
   return (
      <div className="contact-information">
         <div>
            <h2>Contact information</h2>
         </div>
         <br />
         <br />
         <div className="form-contact">
            <Grid container>
               <Grid item xs={12}>
                  <form method="post" action="#">
                     <label htmlFor="name">
                        Full name<span className="required">*</span>
                        <br />
                     </label>
                     <input
                        type="text"
                        placeholder="Enter your full name"
                        id="name"
                        name="name"
                        required
                        onChange={(e) =>
                           setUserInfo({
                              ...userInfo,
                              name: e.target.value,
                           })
                        }
                     />
                     <Grid container spacing={1} className="email-phone">
                        <Grid item lg={5} md={5} xs={12}>
                           <div className="fname">
                              <label htmlFor="phone">
                                 Phone number<span className="required">*</span>
                                 <br />
                              </label>
                              <input
                                 type="text"
                                 placeholder="Enter your phone number"
                                 id="phone"
                                 name="phone"
                                 required
                                 onChange={(e) =>
                                    setUserInfo({
                                       ...userInfo,
                                       phone: e.target.value,
                                    })
                                 }
                              />
                           </div>
                        </Grid>
                        <Grid item lg={2} md={2}></Grid>
                        <Grid item lg={5} md={5} xs={12}>
                           <label htmlFor="email">
                              Email <span className="required">*</span>
                              <br />
                           </label>
                           <input
                              type="text"
                              placeholder="Enter your email"
                              id="email"
                              name="email"
                              required
                              onChange={(e) =>
                                 setUserInfo({
                                    ...userInfo,
                                    email: e.target.value,
                                 })
                              }
                           />
                        </Grid>
                     </Grid>
                     <label htmlFor="address">
                        Address<span className="required">*</span>
                        <br />
                     </label>
                     <input
                        type="text"
                        placeholder="Enter your address"
                        id="address"
                        name="address"
                        required
                        onChange={(e) =>
                           setUserInfo({
                              ...userInfo,
                              address: e.target.value,
                           })
                        }
                     />
                     <Grid container spacing={1}>
                        <Grid item lg={5} md={5} xs={12}>
                           <div className="select-shipping">
                              <label htmlFor="shipping">Select shipping</label>
                              <br />
                              <br />
                              <select name="shipping" id="shipping">
                                 <option value="Normal">Normal</option>
                                 <option value="Express">Express</option>
                                 <option value="Economize">Economize</option>
                              </select>
                           </div>
                        </Grid>
                        <Grid item lg={2} md={2}></Grid>
                        <Grid item lg={5} md={5} xs={12}>
                           <div className="select-payment">
                              <label htmlFor="payment">Select payment</label>
                              <br />
                              <br />
                              <select name="payment" id="payment">
                                 <option value="Momo">Momo</option>
                                 <option value="Mobile banking">Mobile banking</option>
                                 <option value="COD">COD</option>
                              </select>
                           </div>
                        </Grid>
                     </Grid>

                     <Grid container spacing={4} className="payment">
                        <Grid item>
                           <button className="cancel" onClick={CancelOrder()}>
                              Cancel order
                           </button>
                        </Grid>
                        <Grid item>
                           <button type="submit" className="next">
                              Payment
                           </button>
                        </Grid>
                     </Grid>
                  </form>
               </Grid>
            </Grid>
         </div>
      </div>
   )
}

export default ContactInfo

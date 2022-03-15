import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Order_summary from "../order-summary/order-summary";
import './account-summary.css'


const Account_summary = () => {
    return (
        <div className="contact-information">
            <div><h2>Contact information</h2></div><br /><br />
            <div className="form"> 
                <Grid container>
                    <Grid item xs={12}>
                        <form>
                            <label htmlFor="name">Full name<span className="required">*</span><br />
                                <input type="text" placeholder="Enter your full name" id="name" name="name" required />
                            </label>
                            <Grid container spacing={1} className="email-phone">
                                <Grid item lg={5} md={5} xs={12}>
                                    <label htmlFor="phone">Phone number<span className="required">*</span><br />
                                        <input type="text" placeholder="Enter your phone number" id="phone" name="phone" required />
                                    </label>
                                </Grid>
                                <Grid item lg={2} md={2}>
                                </Grid>
                                <Grid item lg={5} md={5} xs={12}>
                                    <label htmlFor="email">Email <span className="required">*</span><br />
                                        <input type="text" placeholder="Enter your email" id="email" name="email" required />
                                    </label>
                                </Grid>
                            </Grid>
                            <label htmlFor="address">Address<span className="required">*</span><br />
                                <input type="text" placeholder="Enter your address" id="address" name="address" required />
                            </label>

                            <Grid container spacing={1}>
                                <Grid item lg={5} md={5} xs={12}>
                                    <div className="select-shipping">
                                        <label htmlFor="shipping">Select shipping</label><br /><br />
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
                                        <label htmlFor="payment">Select payment</label><br /><br /> 
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
                                    <button type="button" className="cancel">Cancel order</button>
                                </Grid>
                                <Grid item>
                                    <button type="button" className="next">Payment</button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
                    
        </div>
    )
    
}


export default Account_summary
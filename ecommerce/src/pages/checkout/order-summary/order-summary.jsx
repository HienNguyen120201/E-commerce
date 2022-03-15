import React from "react";
import IncDecCounter from "./InDecCounter";
import Bill from "./bill";
import './order-summary.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const Order_summary = () => {
    return (
        
        <div className="order-summary">
            <div className="top_1">
                <div className="order-summary-title"><h2>Order summary</h2></div>
                <div className="quantity-price">
                    <Grid container spacing={1} className="quantity">
                        <Grid item xs={7}>
                            Sony wireless headphones
                        </Grid>
                        <Grid item xs ={3}>
                            <IncDecCounter />
                        </Grid>
                    </Grid>
                </div>
                <hr />
                <div className="discountCode">Discount Code</div><br />
                <form action="#">
                    <Grid container spacing={2} className="discount">
                        <Grid item xs={7}>
                            <input className="discountCode-field" type="text" />
                        </Grid>
                        <Grid item xs={3}>
                            <div><button type="butotn" className="apply">Apply</button></div>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <Bill />
        </div>

    )
}


export default Order_summary
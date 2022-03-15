import React from "react";
import Grid from '@material-ui/core/Grid';
import './bill.css';

const Bill = () => {
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
                            <li><b>Total</b></li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <ul className="right-list price">
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                            <li><b>0</b></li>
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Bill;
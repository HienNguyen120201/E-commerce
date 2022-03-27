import React, {Fragment} from 'react';

import ContactInfo from '../components/Payment/ContactInfo';
import OrderSummary from '../components/Payment/OrderSummary/OrderSummary';
import '../css/PaymentStyle/Payment.css'
import Grid from "@mui/material/Grid"

const Payment = () => {
  return (
    <div>
      <Fragment>
      <Grid container spacing={1}>
        <Grid item lg={6}>
          <ContactInfo />
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={5}>
          <OrderSummary />
        </Grid>
      </Grid>
      </Fragment>
    </div>
  )
}

export default Payment
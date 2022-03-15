import React, {Fragment} from 'react';

import Account_summary from './account/account-summary';
import payment_summary from './payment/payment-summary';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Order_summary from './order-summary/order-summary';
import Grid from '@material-ui/core/Grid';

const Payment = () => {
  return (
    <div>
      <Fragment>
      <Header />
      <Grid container spacing={1}>
        <Grid item lg={1}></Grid>
        <Grid item lg={5}>
          <Account_summary />
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={3}>
          <Order_summary />
        </Grid>
      </Grid>
      <Footer />
      </Fragment>
    </div>
  )
}

export default Payment
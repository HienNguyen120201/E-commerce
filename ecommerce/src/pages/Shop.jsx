import React from "react";
import Header from "./../components/Header";
import ShopFilter from "../components/ShopFilter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductList from './../components/ProductList'
function Shop() {
    return (
        <>
            <Header />
            <Container maxWidth="xl" style = {{paddingLeft: "10rem", paddingRight: "10rem"}}>
                <Grid container>
                    <Grid item xl = {3} style = {{paddingRight: "5rem"}}>
                        <ShopFilter />
                    </Grid>

                    <Grid item xl = {9}>
                       <ProductList />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Shop;

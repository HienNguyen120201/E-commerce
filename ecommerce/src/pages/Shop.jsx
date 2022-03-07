import React from "react";
import Header from "./../components/Header";
import ShopFilter from "../components/ShopFilter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Shop() {
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xl = {2}>
                        <ShopFilter />
                    </Grid>

                    <Grid item xl = {10}>
                       
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Shop;

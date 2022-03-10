import React from "react";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";
import phoneList from "../data/phone";

function ProductList() {
    return (
        <>
            <Grid container style={{ marginTop: "5rem" }}>
                {phoneList.map((item, idx) => {
                    return (
                        <Grid item lg={3} key={idx}>
                            <ProductItem
                                title={item.title}
                                imgSrc={item.imgSrc}
                                discount_price={item.discount_price}
                                market_price={item.market_price}
                                isSale={item.isSale}
                                saleText={item.saleText}
                            />
                        </Grid>
                    );
                })}
                
            </Grid>
        </>
    );
}

export default ProductList;

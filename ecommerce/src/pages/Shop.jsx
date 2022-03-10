import React from "react";
import Header from "./../components/Header";
import ShopFilter from "../components/ShopFilter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductList from "./../components/ProductList";
import Card from "./../components/shared/Card";
import "./../assets/css/Shop.css";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const formatVND = (num) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(num);
};

function Shop() {
    const { price, screen, feature } = useSelector((state) => state.shop);
    const tagList = ["Iphone"];
    if (price.length !== 0)
        tagList.push(`${formatVND(price[0])} - ${formatVND(price[1])}`);
    if (feature) tagList.push(...feature);
    if (screen) tagList.push(...screen);

    return (
        <>
            <Header />
            <Container maxWidth="xl" style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
                <Grid container>
                    <Grid item xl={3} style={{ paddingRight: "5rem" }}>
                        <ShopFilter />
                    </Grid>

                    <Grid item xl={9}>
                        <div className="filter-result" style={{ marginTop: "3rem" }} >
                            <Card>
                                <div className="filtercard-header">
                                    <h2>Điện thoại</h2>
                                    <span>(12 sản phẩm)</span>
                                </div>
                                <div className="filter-tag-list">
                                    <span>Lọc theo:</span>
                                    {tagList.map((item, idx) => {
                                        return (
                                            <div className="filter-tag-item" key={idx}>
                                                <span>{item}</span>
                                                <FaTimes fontSize="16px" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </div>

                        <ProductList />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Shop;

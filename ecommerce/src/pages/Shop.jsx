import React from "react"
// import Header from "./../components/Header"
import ShopFilter from "./../components/Shop/ShopFilter"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ProductList from "./../components/Shop/ProductList"
import Card from "./../components/Shop/Card"
import "./../css/ShopStyle/Shop.css"
import { FaTimes } from "react-icons/fa"
import { useSelector } from "react-redux"

const formatVND = (num) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(num)
}

function Shop() {
  

  return (
    <>
      <Grid container>
        <Grid item xl={3}>
          <ShopFilter />
        </Grid>

        <Grid item xl={9} style={{ paddingLeft: "5rem" }}>
          <div className="filter-result" style={{ marginTop: "3rem" }}>
            <Card>
              <div className="filtercard-header">
                <h2>Điện thoại</h2>
                <span>(12 sản phẩm)</span>
              </div>
              <div className="filter-tag-list">
                <span>Lọc theo:</span>
                
              </div>
            </Card>
          </div>

          <ProductList />
        </Grid>
      </Grid>
    </>
  )
}

export default Shop

import React from "react"
import ProductItem from "./ProductItem"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"

const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
   }).format(num)
}

function ProductList() {
   const products = useSelector((state) => state.shop.products)
   return (
      <>
         <Grid container style={{ marginTop: "5rem" }}>
            {products.map((item, idx) => {
               const sale = item.market_price - item.discount_price
               const sale_text = item.market_price > item.discount_price ? `Giảm ${formatVND(sale)}` : null
               return (
                  <Grid item lg={4} key={idx}>
                     <ProductItem
                        id={item.id}
                        title={item.name}
                        imgSrc={item.imageList}
                        discount_price={item.discount_price}
                        market_price={item.market_price}
                        isSale={item.market_price > item.discount_price ? true : false}
                        saleText={sale_text}
                        short_description={item.short_description}
                        rating_average={item.rating_average}
                        review_count={item.review_count}
                        sale_count={item.sale_count}
                     />
                  </Grid>
               )
            })}
         </Grid>
      </>
   )
}

export default ProductList

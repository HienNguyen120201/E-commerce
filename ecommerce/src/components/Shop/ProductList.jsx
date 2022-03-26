import React from "react"
import ProductItem from "./ProductItem"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"

function ProductList({cate}) {
   const products = useSelector((state) => state.shop.products)
   const filteredProducts =  useSelector((state) => state.shop.filterProducts)
   const isFilter =  useSelector((state) => state.shop.isFilter)
   console.log(products)
   let list = isFilter ? filteredProducts: products.filter(product => product.type === cate)
   return (
      <>
         <Grid container style={{ marginTop: "5rem" }}>
            {list.map((item, idx) => {
               // const sale = item.market_price - item.discount_price
               // const sale_text = item.market_price > item.discount_price ? `Giảm ${formatVND(sale)}` : null
               return (
                  <Grid item lg={4} key={idx}>
                     <ProductItem
                        id={item.productId}
                        title={item.name}
                        imgSrc={[item.imgUrl1, item.imgUrl2, item.imgUrl3]}
                        discount_price={item.unitPrice}
                        market_price={item.oldPrice}
                        isSale={item.market_price > item.discount_price ? true : false}
                        saleText={item.status}
                        short_description={item.description}
                        rating_average={item.rating}
                        review_count={200}
                        sale_count={500}
                     />
                  </Grid>
               )
            })}
         </Grid>
      </>
   )
}

export default ProductList

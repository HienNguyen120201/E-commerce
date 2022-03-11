import React from "react"
import ShopFilter from "./../components/Shop/ShopFilter"
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
   const { price, screen, feature } = useSelector((state) => state.shop)
   const tagList = ["Iphone"]
   if (price.length !== 0) tagList.push(`${formatVND(price[0])} - ${formatVND(price[1])}`)
   if (feature) tagList.push(...feature)
   if (screen) tagList.push(...screen)

   return (
      <>
         <Grid container style={{ marginBottom: "5rem" }}>
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
                        {tagList.map((item, idx) => {
                           return (
                              <div className="filter-tag-item" key={idx}>
                                 <span>{item}</span>
                                 <FaTimes fontSize="16px" />
                              </div>
                           )
                        })}
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

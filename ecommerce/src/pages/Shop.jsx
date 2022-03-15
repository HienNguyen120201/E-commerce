import React, { useState } from "react"
import ShopFilter from "./../components/Shop/ShopFilter"
import Grid from "@mui/material/Grid"
import ProductList from "./../components/Shop/ProductList"
import Card from "./../components/Shop/Card"
import "./../css/ShopStyle/Shop.css"
import { FaTimes } from "react-icons/fa"
import { useSelector } from "react-redux"
import ShopSkeleton from "../components/Shop/ShopSkeleton"

function Shop() {
   const currentUrl = window.location.pathname.substring(1)
   const { products } = useSelector((state) => state.shop)
   const tagList = useSelector((state) => state.shop.filteredTag)
   // console.log(tagList, "hehehe")
   let category = -1;
   let title;
   if (currentUrl === "Mobile") {
      category = 1
      title = "Điện thoại"
   }
   else if (currentUrl === "Laptop") {
      category = 2
      title = "Laptop"
   }
   else if (currentUrl === "Accessory") {
      category = 3
      title = "Phụ kiện"
   }

   window.onpopstate = function () {
      window.location.reload()
      handleLoading(false)
   }
   const [loading, setLoading] = useState(true)
   const handleLoading = (value) => {
      setLoading(value)
   }
   const [tag, setTag] = useState([])
   const handleSetTag = (value) => {
      setTag(value);
   }
   console.log(tag)
   // let resTag = (tagList.length > 0) ? tagList: tag
   return (
      <>
         <Grid container style={{ marginBottom: "5rem" }}>
            <Grid item xl={3}>
               <ShopFilter pathname={currentUrl} handleLoading={handleLoading} cate={category} handleSetTag={handleSetTag} />
            </Grid>

            <Grid item xl={9} style={{ paddingLeft: "5rem" }}>
               {loading ? (
                  <ShopSkeleton />
               ) : (
                  <>
                     <div className="filter-result" style={{ marginTop: "3rem" }}>
                        <Card>
                           <div className="filtercard-header">
                              <h2>{title}</h2>
                              <span>{`(${products.length} sản phẩm)`}</span>
                           </div>
                           <div className="filter-tag-list">
                              <span>Lọc theo:</span>
                              {tag.map((item, idx) => {
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
                  </>
               )}
            </Grid>
         </Grid>
      </>
   )
}

export default Shop

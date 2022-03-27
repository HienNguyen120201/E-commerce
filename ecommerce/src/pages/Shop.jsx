import React, { useState, useEffect } from "react"
import ShopFilter from "./../components/Shop/ShopFilter"
import Grid from "@mui/material/Grid"
import ProductList from "./../components/Shop/ProductList"
import Card from "./../components/Shop/Card"
import "./../css/ShopStyle/Shop.css"
import { FaTimes } from "react-icons/fa"
import { useSelector } from "react-redux"
import ShopSkeleton from "../components/Shop/ShopSkeleton"
import { useDispatch } from "react-redux"
import { fetchProductsData } from "./../redux/action/shopAction"
function Shop() {
   const currentUrl = window.location.pathname.substring(1)
   const { products } = useSelector((state) => state.shop)
   const filteredProducts = useSelector((state) => state.shop.filterProducts)
   const isFilter = useSelector((state) => state.shop.isFilter)
   const filteredTag = useSelector((state) => state.shop.filteredTag)
   const dispatch = useDispatch()
   let cate = ""
   let title
   if (currentUrl.includes("Mobile")) {
      title = "Điện thoại"
      cate = "Mobile"
   } else if (currentUrl.includes("Laptop")) {
      title = "Laptop"
      cate = "Laptop"
   } else if (currentUrl.includes("Accessory")) {
      title = "Phụ kiện"
      cate = "Accessory"
   }
   window.onpopstate = function () {
      window.location.reload()
      handleLoading(false)
   }
   const [loading, setLoading] = useState(true)
   const handleLoading = (value) => {
      setLoading(value)
   }

   useEffect(() => {
      dispatch(fetchProductsData())
   }, [dispatch])

   let list = isFilter ? filteredProducts : products.filter((product) => product.type === cate)
   useEffect(() => {
      if (products.length > 0) {
         setLoading(false)
      }
   }, [products])
   return (
      <>
         <Grid container style={{ marginBottom: "5rem" }}>
            <Grid item xl={3}>
               <ShopFilter pathname={currentUrl} />
            </Grid>

            <Grid item xl={9} style={{ paddingLeft: "3rem" }}>
               {loading ? (
                  <ShopSkeleton />
               ) : (
                  <>
                     <div className="filter-result" style={{ marginTop: "3rem" }}>
                        <Card>
                           <div className="filtercard-header">
                              <h2>{title}</h2>
                              <span>{`(${list.length} sản phẩm)`}</span>
                           </div>
                           <div className="filter-tag-list">
                              <span>Lọc theo:</span>
                              {filteredTag.map((item, idx) => {
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

                     <ProductList cate={cate} />

                  </>
               )}
            </Grid>
         </Grid>
      </>
   )
}

export default Shop

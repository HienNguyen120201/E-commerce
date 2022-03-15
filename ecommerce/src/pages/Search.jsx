import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./../css/search.css"
import Loading from "../components/Shop/Loading"
import Grid from "@mui/material/Grid"
import ProductItem from "./../components/Shop/ProductItem"
import axiosClient from "../api/axiosClient"
import { setProducts } from "../redux/action/shopAction"

const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
   }).format(num)
}

function Search() {
   const dispatch = useDispatch()
   const searchKeywords = useSelector((state) => state.shop.searchKeywords)
   const products = useSelector((state) => state.shop.products)
   const [loading, setLoading] = useState(true)
   const x = window.location.pathname.split("/")
   const urlSearchPath = decodeURI(x[x.length - 1])

   const searchResult = (keyword) => {
      console.log(keyword)
      return (dispatch) => {
         axiosClient.get(`/products?q=${keyword}`).then((response) => {
            dispatch(setProducts(response.data))
         })
      }
   }
   /* dispatch khi urlparams hoặc search thay đổi */
   useEffect(() => {
      if (searchKeywords !== "") {
         dispatch(searchResult(urlSearchPath))
         setLoading(true)
      }
   }, [urlSearchPath, searchKeywords])

   /* bỏ trạng thái loading khi quá trình call api hoàn tất */
   useEffect(() => {
      setLoading(false)
   }, [products])

   /* */
   useEffect(() => {
      
      dispatch(searchResult(urlSearchPath))
      setLoading(true)
   }, [])

   /*
   * reload khi user nhấn nút backward hoặc forward để load lại trạng thái tìm kiếm. 
   * cách khác để không reload page nhưng vẫn load lại từ khoá tìm kiếm? */

   window.onpopstate = function () {
      window.location.reload()

   }
   return (
      <div>
         {loading ? (
            <Loading />
         ) : (
            <>
               <h1 className="search-title">
                  Có <strong className="red">{loading === true ? "..." : products.length}</strong> sản phẩm với từ khoá:{" "}
                  <strong className="red">{urlSearchPath}</strong>
               </h1>
               <div className="search-result">
                  <Grid container>
                     {products.map((item, idx) => {
                        const sale = item.market_price - item.discount_price
                        const sale_text = item.market_price > item.discount_price ? `Giảm ${formatVND(sale)}` : null
                        return (
                           <Grid item lg={3} key={idx}>
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
               </div>
            </>
         )}
      </div>
   )
}

export default Search

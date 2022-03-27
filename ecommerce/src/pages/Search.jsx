import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./../css/search.css"
import Loading from "../components/Shop/Loading"
import Grid from "@mui/material/Grid"
import ProductItem from "./../components/Shop/ProductItem"
import { searchProduct } from "../redux/action/shopAction"

const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
   }).format(num)
}

function Search() {
   const dispatch = useDispatch()
   const searchKeywords = useSelector((state) => state.shop.searchKeywords)
   const searchResult = useSelector((state) => state.shop.searchResult)

   const [loading, setLoading] = useState(true)
   const x = window.location.pathname.split("/")
   const urlSearchPath = decodeURI(x[x.length - 1])

   /* dispatch khi urlparams hoặc search thay đổi */
   useEffect(() => {
      if (searchKeywords !== "") {
         dispatch(searchProduct(urlSearchPath))
         setLoading(true)
      }
   }, [urlSearchPath, searchKeywords])

   /* bỏ trạng thái loading khi quá trình call api hoàn tất */
   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 500)
   }, [searchResult])

   /* */
   useEffect(() => {
      dispatch(searchProduct(urlSearchPath))
      setLoading(true)
   }, [])

   // console.log(searchResult)
   /*
    * reload khi user nhấn nút backward hoặc forward để load lại trạng thái tìm kiếm.
    * cách khác để không reload page nhưng vẫn load lại từ khoá tìm kiếm? */

   window.onpopstate = function () {
      window.location.reload()
   }

   const render =
      searchResult.length === 0 ? (
         <>
            <h2 style={{fontWeight: "500", marginTop: "4rem", marginBottom: "8rem"}}>
               Không có kết quả phù hợp với từ khoá <span style={{color: '#ff2f2f', fontWeight: '700'}}>{searchKeywords}</span>
            </h2>
         </>
      ) : (
         <>
            <h1 className="search-title">
               Có <strong className="red">{loading === true ? "..." : searchResult.length}</strong> sản phẩm với từ
               khoá: <strong className="red">{urlSearchPath}</strong>
            </h1>
            <div className="search-result">
               <Grid container>
                  {searchResult.map((item, idx) => {
                     const sale = item.market_price - item.discount_price
                     const sale_text = item.market_price > item.discount_price ? `Giảm ${formatVND(sale)}` : null
                     return (
                        <Grid item lg={3} key={idx}>
                           <ProductItem
                              id={item.productId}
                              title={item.name}
                              imgSrc={[item.imgUrl1, item.imgUrl2, item.imgUrl3]}
                              discount_price={item.unitPrice}
                              market_price={item.oldPrice}
                              isSale={item.market_price > item.discount_price ? true : false}
                              saleText={sale_text}
                              short_description={item.description}
                              rating_average={item.rating}
                              review_count={"20"}
                              sale_count={"50"}
                           />
                        </Grid>
                     )
                  })}
               </Grid>
            </div>
         </>
      )
   return <div>{loading ? <Loading /> : render}</div>
}

export default Search

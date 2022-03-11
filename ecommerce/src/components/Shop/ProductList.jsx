import React, { useEffect } from "react"
import ProductItem from "./ProductItem"
import Grid from "@mui/material/Grid"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "./../../redux/action/shopAction"

const formatVND = (num) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(num)
}

function ProductList() {
  /**---------------------- DISPATCH: Đẩy danh sách sản phẩm lên store redux ------------------------ */

  const products = useSelector((state) => state.shop.products)
  const dispatch = useDispatch()

  /**--------------------- FETCH PRODUCT LIST: call api lấy danh sách sản phẩm------------------------ */

  const fetchProductList = () => {
    return (dispatch) => {
      axios.get("http://localhost:5000/api/products").then((res) => {
        dispatch(setProducts(res.data))
      })
    }
  }

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  /**------------------------------------------------------------------------------------------------ */

  return (
    <>
      <Grid container style={{ marginTop: "5rem" }}>
        {products.map((item, idx) => {
          const sale = item.market_price - item.discount_price;
          const sale_text = item.market_price > item.discount_price? `Giảm ${formatVND(sale)}`: null
          return (
            <Grid item lg={4} key={idx}>
              <ProductItem
                id = {item.id}
                title={item.name}
                imgSrc = {item.imageList}
                discount_price={item.discount_price}
                market_price={item.market_price}
                isSale={item.market_price > item.discount_price? true: false}
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

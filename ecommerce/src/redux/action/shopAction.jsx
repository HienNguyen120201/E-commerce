import axiosClient from "../../api/axiosClient"

/* action trả về các tag đã fill */
export const submitFilter = (data) => {
   return {
      type: "SUBMIT_FILTER",
      payload: data,
   }
}

/* action trả về các sản phẩm đã filter */
export const applyFilter = (data) => {
   return {
      type: "APPLY_FILTER",
      payload: data,
   }
}
/* action thêm 1 sản phẩm vào cart
  const product = {
    id: 1
    name: "" 
    market_price: 1234455
    discount_price: 1234556
    color: ""
    size: "",
    qty: 1,
    thumbnail: "http...",       
 }
 */
export const addToCart = (product) => {
   return {
      type: "ADD_TO_CART",
      payload: product,
   }
}

/* data gồm id, màu và dung lượng bộ nhớ đã chọn */
export const deleteCart = (data) => {
   return {
      type: "DELETE_CART",
      payload: data,
   }
}

/* action đẩy dữ liệu đã fetch lên redux store */
export const setProducts = (data) => {
   return {
      type: "SET_PRODUCTS",
      payload: data,
   }
}

/* action tăng số lượng sản phẩm trong giỏ hàng */
export const increaseQuantity = (product) => {
   return {
      type: "INCREASE_QUANTITY",
      payload: product,
   }
}

/* action giảm số lượng sản phẩm trong giỏ hàng */
export const decreaseQuantity = (product) => {
   return {
      type: "DECREASE_QUANTITY",
      payload: product,
   }
}

/* action lấy thông tin sản phẩm đang được chọn */
export const getSelectedProduct = (id) => {
   return {
      type: "SELECTED_PRODUCT",
      payload: id,
   }
}

/* action đẩy từ khoá lên store */
export const searchProduct = (keyword) => {
   return {
      type: "SEARCH_PRODUCT",
      payload: keyword,
   }
}

export const fetchProductsData = () => {
   return async (dispatch) => {
      const data = await Promise.all([
         await (await axiosClient.get("/products")).data,
         await (await axiosClient.get("/colors")).data,
         await (await axiosClient.get("/sizes")).data,
         await (await axiosClient.get("/tags")).data,
         await (await axiosClient.get("/features")).data,
      ])
      dispatch(setProducts(data))
   }
}

export const filter = (data) =>{
   return {
      type: "FILTER",
      payload: data,
   }
}

export const setFilters = (data) =>{
   return {
      type: "SET_FILTER",
      payload: data,
   }
}

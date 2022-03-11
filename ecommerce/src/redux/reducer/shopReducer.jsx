const initState = {
   search: "",
   category: "",
   price: [],
   features: [],
   screen: [],
   filteredTag: [],
   filteredProducts: [],
   cart: [],
   products: [],
   selectedProduct: {},
}

export const shopReducer = (state = initState, action) => {
   switch (action.type) {
      case "SUBMIT_FILTER":
         return {
            //* copy lại state ban đầu
            ...state,
            //* thay đổi những trường dữ liệu của action gửi lên so với state ban đầu
            search: action.payload.search,
            category: action.payload.category,
            price: action.payload.price,
            screen: action.payload.screen,
            filteredTag: [
               ...action.payload.price,
               ...action.payload.features,
               ...action.payload.screen,
            ],
         }
      case "ADD_TO_CART":
         const alreadyInCart = state.cart.find((item) =>
            item.id === action.payload.id &&
            item?.color === action?.payload.color &&
            item?.size === action.payload?.size
               ? true
               : false
         )

         return {
            ...state,
            cart: alreadyInCart
               ? state.cart.map((item) => {
                    return item.id === action.payload.id
                       ? {
                            ...item,
                            qty: item.qty + action.payload.qty,
                         }
                       : item
                 })
               : [
                    ...state.cart,
                    {
                       id: action.payload.id,
                       name: action.payload.name,
                       market_price: action.payload.market_price,
                       discount_price: action.payload.discount_price,
                       color: action.payload.color,
                       size: action.payload.size,
                       thumbnail: action.payload.thumbnail,
                       qty: action.payload.qty,
                    },
                 ],
         }

      case "DELETE_CART":
         return {
            ...state,
            cart: state.cart.filter((item) => {
               return (
                  item.id !== action.payload.id ||
                  !(
                     item.id === action.payload.id &&
                     item.color === action.payload.color &&
                     item.size === action.payload.size
                  )
               )
            }),
         }

      case "INCREASE_QUANTITY":
         return {
            ...state,
            cart: state.cart.map((item) => {
               return item.id === action.payload.id
                  ? {
                       ...item,
                       qty: item.qty + 1,
                    }
                  : item
            }),
         }

      case "DECREASE_QUANTITY":
         return {
            ...state,
            cart: state.cart.map((item) => {
               return item.id === action.payload.id
                  ? {
                       ...item,
                       qty: item.qty === 1 ? 1 : item.qty - 1,
                    }
                  : item
            }),
         }

      case "SET_PRODUCTS":
         return {
            ...state,
            products: action.payload,
         }

      case "SELECTED_PRODUCT":
         // console.log(action.payload)
         const currentId = action.payload
         return {
            ...state,
            selectedProduct: state.products.filter((item) => item.id === currentId),
         }
      default:
         return state
   }
}

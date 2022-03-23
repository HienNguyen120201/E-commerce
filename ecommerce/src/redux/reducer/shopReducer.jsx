const initState = {
   searchKeywords: "",
   category: "",
   price: [],
   features: [],
   screen: [],
   filteredTag: [],
   cart: [],
   products: [],
   selectedProduct: {},
   isLoaded: false,
   filterProducts: [],
   isFilter: false,
}

export const shopReducer = (state = initState, action) => {
   switch (action.type) {
      case "SUBMIT_FILTER":
         const res = []
         const option = action.payload
         for (const [key, value] of Object.entries(option)) {
            if (value) {
               res.push(key)
            }
         }
         return {
            ...state,
            filteredTag: [...res],
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
         const [productList, colors, sizes, tags, featureList] = action.payload
         // console.log(productList)
         const colorList = (id) => {
            return colors
               .map((item) => {
                  return item.productId === id ? item.productColor : null
               })
               .filter((item) => item !== null)
         }

         const sizeList = (id) => {
            return sizes
               .map((item) => {
                  return item.productId === id ? item.productSize : null
               })
               .filter((item) => item !== null)
         }

         const tagList = (id) => {
            return tags
               .map((item) => {
                  return item.productId === id ? item.productTag : null
               })
               .filter((item) => item !== null)
         }

         const featureLists = (id) => {
            return featureList
               .map((item) => {
                  return item.productId === id ? item.productFeature : null
               })
               .filter((item) => item !== null)
         }

         productList.forEach((item) => {
            item.colors = colorList(item.productId)
            item.sizes = sizeList(item.productId)
            item.tags = tagList(item.productId)
            item.features = featureLists(item.productId)
         })

         return {
            ...state,
            products: productList,
            isLoaded: true,
         }

      case "SELECTED_PRODUCT":
         console.log(action.payload)
         const currentId = action.payload
         return {
            ...state,
            selectedProduct: state.products.filter((item) => item.productId === currentId),
         }

      case "APPLY_FILTER":
         return {
            ...state,
            products: [...action.payload],
         }

      case "SEARCH_PRODUCT":
         console.log(action.payload)
      case "FILTER":
         // console.log(action.payload)
         const query = action.payload.split("&")
         let filteredProducts = []
         let check = false;
         query.forEach((item) => {
            if (item.includes("type")) {
               console.log(item)
               const value = item.split("=")[1].toLowerCase()
               filteredProducts = state.products.filter((p) => p.tags[0] === value)
               check = true
            } else if (item.includes("discount_price_gte")) {
               const value = Number.parseInt(item.split("=")[1])
               if (filteredProducts.length === 0 && !check) {
                  filteredProducts = state.products.filter((p) => Number.parseInt(p.unitPrice) >= value)
                  
               } else {
                  filteredProducts = filteredProducts.filter((p) => Number.parseInt(p.unitPrice) >= value)
               }
            } else if (item.includes("discount_price_lte")) {
               const value = Number.parseInt(item.split("=")[1])
               if (filteredProducts.length === 0 && !check) {
                  filteredProducts = state.products.filter((p) => Number.parseInt(p.unitPrice) <= value)
               } else {
                  filteredProducts = filteredProducts.filter((p) => Number.parseInt(p.unitPrice) <= value)
               }
            }
            console.log(filteredProducts)
         })
        
         return {
            ...state,
            filterProducts: filteredProducts,
         }
      case "SET_FILTER":
         return {
            ...state,
            isFilter: action.payload,
         }

      default:
         return state
   }
}

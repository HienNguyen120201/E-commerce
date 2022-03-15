import { configureStore } from '@reduxjs/toolkit'

import cartItemsReducer from './shop-cart/cartItem'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsReducer
    },
})
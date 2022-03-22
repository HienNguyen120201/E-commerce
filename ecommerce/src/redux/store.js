import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer'
import { shopReducer } from './reducer/shopReducer'
import loginUserReducer from './Login/LoginUser'

import cartItemsReducer from './shop-cart/CartItemsSlide'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsReducer,
        shop: shopReducer,
        login: loginUserReducer,
    },
})
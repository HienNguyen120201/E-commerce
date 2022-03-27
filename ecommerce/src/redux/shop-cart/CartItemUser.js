import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    value: items,
}
export const cartItemUser = createSlice({ 
    name: 'cartItemUser',
    initialState,
    reducers: {
        updateItem: (state, action) => {
            const newItem = action.payload
            const item = state.value.filter(e => e.productId === newItem.productId && e.color === newItem.color && e.size === newItem.size)
            if (item.length > 0) {
                state.value = state.value.filter(e => e.productId !== newItem.productId || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: item[0].id,
                    productId: newItem.productId,
                    color: newItem.color,
                    size: newItem.size,
                    unitPrice: newItem.unitPrice,
                    name:newItem.name,
                    image1:newItem.image1,
                    quantity: newItem.quantity
                }]
            }
            localStorage.setItem('cartItemUser', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        }
    }
})
export const {updateItem } = cartItemUser.actions

export default cartItemUser.reducer
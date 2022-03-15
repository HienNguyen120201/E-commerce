import React, { useState, useRef, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from "../../redux/shop-cart/CartItemsSlide"
import numberWithCommas from '../../utils/numberWithCommas'

const CartItem = props => {

    const dispatch = useDispatch()

    const itemRef = useRef(null)

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...item, quantity: quantity + 1}))
        }
        if (opt === '-') {
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
        }
    }
    const removeCartItem = () => {
        console.log('removeCartItem')
        dispatch(removeItem(item))
    }
    return (
        <tr>
            <td></td>
            <td className="nameStyle">{item.name}</td>
            <td className="text-center">{numberWithCommas(Number(item.unitPrice))}</td>
            <td>
                <div className="quantity1">
                        <div className="quantity-btn" onClick={() => updateQuantity('-')}>
                            <i className="fa fa-minus"></i>
                        </div>
                        <div className="quantity">{quantity}</div>
                            <div className="quantity-btn" onClick={() => updateQuantity('+')}>
                            <i className="fa fa-plus"></i>
                        </div>
            </div>
            </td>
            <td className="text-center">{numberWithCommas(item.unitPrice*item.quantity)}</td>
            <td className="text-center">
				<button className="remove_cart"><i className="fa fa-trash" onClick={() => removeCartItem()}></i></button>
			</td>
            
        </tr>
    )
}

export default CartItem

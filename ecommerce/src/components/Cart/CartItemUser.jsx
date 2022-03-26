// import React, { useState, useEffect } from 'react'
// import numberWithCommas from '../../utils/numberWithCommas'
// const CartItemUser = props => {
//     const [item, setItem] = useState(props.item)
//     const [quantity, setQuantity] = useState(props.item.quantity)

//     useEffect(() => {
//         setItem(props.item)
//     }, [props.item])
    
//     const updateQuantity = (opt) => {
//         if (opt === '+') {
//             setQuantity(quantity+1)
//         }
//         if (opt === '-') {
//            setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
//         }
//     }

//     return (
//         <tr>
//             <td></td>
//             <td className="nameStyle">{item.productName}-{item.color}-{item.size}GB</td>
//             <td className="text-center">{numberWithCommas(Number(item.unitPrice))}</td>
//             <td>
//                 <div className="quantity1">
//                         <div className="quantity-btn" onClick={() => updateQuantity('-')}>
//                             <i className="fa fa-minus"></i>
//                         </div>
//                         <div className="quantity">{quantity}</div>
//                             <div className="quantity-btn" onClick={() => updateQuantity('+')}>
//                             <i className="fa fa-plus"></i>
//                         </div>
//             </div>
//             </td>
//             <td className="text-center">{numberWithCommas(item.unitPrice*quantity)}</td>
//             <td className="text-center">
// 				<button className="remove_cart"><i className="fa fa-trash" ></i></button>
// 			</td>
            
//         </tr>
//     )
// }

// export default CartItemUser
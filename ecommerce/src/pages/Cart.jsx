import { ConstructionOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import CartItem from '../components/Cart/CartItem'
import numberWithCommas from '../utils/numberWithCommas'
import { Link } from "react-router-dom"

import { useSelector } from 'react-redux'

const Cart = () => {
	const cartItems = useSelector((state) => state.cartItems.value)
    
    const [productCart,setProductCart]=useState([])

    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        setProductCart(cartItems)
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.unitPrice)), 0))
    }, [cartItems])
	console.log('TotalPrice là: ',totalPrice)
  return (
    <div className="container">
<div className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="billing-details">
						<div className="section-title">
							<h3 className="title">Thông tin giao hàng</h3>
						</div>
						<div className="form-group">
							<label>Họ và tên</label>
							<input className="input" type="text" name="Name"/>
						</div>
						<div className="form-group">
							<label>Số nhà/Tên đường - Thôn</label>
							<input className="input" type="text" name="Hamlet"/>
						</div>
						<div className="form-group">
							<label>Xã - Phường - Thị trấn</label>
							<input className="input" type="text" name="Village" />
						</div>
						<div className="form-group">
							<label>Quận - Huyện - Thành phố</label>
							<input className="input" type="text" name="District"/>
						</div>
						<div className="form-group">
							<label>Tỉnh - Thành phố</label>
							<input className="input" type="text" name="Province"/>
						</div>
						<div className="form-group">
							<label>Số điện thoại</label>
							<input className="input" type="tel" name="Telephone"/>
						</div>
					</div>
					</div>
				<div className="col-md-7 order-details">
					<div className="section-title text-center">
						<h3 className="title">Giỏ hàng của bạn</h3>
					</div>
					<div className="order-summary">
						<table className="table">
						<thead>
							<tr>
								<th></th>
								<th>Sản phẩm</th>
								<th className="text-center">Đơn giá</th>
								<th className="text-center">Số lượng</th>
								<th className="text-center">Thành tiền</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
                                {
                        		productCart.map((item, index) => (
                            	<CartItem item={item} key={index}/>
                        		))
                    			}
						</tbody>
					    </table>
					</div>
						
						<div className="order-sum">
							<div >Tổng giá tiền</div>
									<div className="order-total">{numberWithCommas(Number(totalPrice))} VNĐ</div>
						</div>
						<div className="input-checkbox">
							<input type="checkbox" id="terms" form="payment" />
							<label htmlFor="terms">
								<span></span>
								Tôi đồng ý với các <a href="#" >Điều khoản & và điều kiện</a>
							</label>
						</div>
						<div  className="text-right">
						<button className=" btn-success my-1" >Tiếp tục mua hàng</button>
						<Link to={'/Checkout'}><button className=" btn-success my-1">Đặt hàng</button></Link>
						</div>
				</div>
			</div>
		</div>
</div>
</div>
  )
}

export default Cart
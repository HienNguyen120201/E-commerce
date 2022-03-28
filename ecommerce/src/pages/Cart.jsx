import { ConstructionOutlined } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import CartItem from "../components/Cart/CartItem"
import numberWithCommas from "../utils/numberWithCommas"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { useSelector } from "react-redux"

const Cart = () => {
   const cartItems = useSelector((state) => state.cartItems.value)

   const [productCart, setProductCart] = useState([])
   let navigate = useNavigate()

   const [totalPrice, setTotalPrice] = useState(0)
   let user = useSelector((state) => state.login.userInfo)
   const isLogin = useSelector((state) => state.login.isLogin)
   if (!isLogin) {
      user = null
   }

   useEffect(() => {
      setProductCart(cartItems)
      setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.unitPrice), 0))
   }, [cartItems])

//    console.log(totalPrice)
   const [bill, setBill] = useState({
      User: user,
      UserName: "",
      Thon: "",
      Xa: "",
      Huyen: "",
      Tinh: "",
      PhoneNumber: "",
      PaymentMethod: "momo",
   })

   const handleChangeBill = (e) => {
      const { name, value } = e.target
      setBill({ ...bill, [name]: value })
   }
   const Billdetail = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : []
   const Bill = [bill]
   const BillAndDetail = [...Bill, ...Billdetail]

   const handleChangePayment = e => {

	   setBill((prev) => ({
		   ...prev,
		   PaymentMethod: e.target.value
	   }))
   }

   const payment = async (e) => {
      e.preventDefault()
      console.log(Bill)
      console.log(BillAndDetail)
      console.log(Billdetail)
         const result = await axios.post("https://localhost:44306/api/Product/PostBillDetail", BillAndDetail)
         if (result.data) {
            alert("Thanh toán thành công")
            navigate("/Home")
         } else {
            alert("Thanh toán không thành công")
         }
   };
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
                           <input className="input" type="text" name="UserName" onChange={handleChangeBill} required />
                        </div>
                        <div className="form-group">
                           <label>Số nhà/Tên đường - Thôn</label>
                           <input className="input" type="text" name="Thon" onChange={handleChangeBill} required />
                        </div>
                        <div className="form-group">
                           <label>Xã - Phường - Thị trấn</label>
                           <input className="input" type="text" name="Xa" onChange={handleChangeBill} required />
                        </div>
                        <div className="form-group">
                           <label>Quận - Huyện - Thành phố</label>
                           <input className="input" type="text" name="Huyen" onChange={handleChangeBill} required />
                        </div>
                        <div className="form-group">
                           <label>Tỉnh - Thành phố</label>
                           <input className="input" type="text" name="Tinh" onChange={handleChangeBill} required />
                        </div>
                        <div className="form-group">
                           <label>Số điện thoại</label>
                           <input
                              className="input"
                              type="tel"
                              name="PhoneNumber"
                              onChange={handleChangeBill}
                              required
                           />
                        </div>
                        <div className="form-group">
                           <label htmlFor="method">Phương thức thanh toán</label>
                           <select
                              className="input"
                              id="method"
                              name="PaymentMethod"
                              defaultValue="momo"
                              onChange={handleChangePayment}
                           >
                              <option value="momo">Momo</option>
                              <option value="cod">COD</option>
                              <option value="paypal">Paypal</option>
                           </select>
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
                              {productCart.map((item, index) => (
                                 <CartItem item={item} key={index} />
                              ))}
                           </tbody>
                        </table>
                     </div>

                     <div className="order-sum">
                        <div>Tổng giá tiền</div>
                        <div className="order-total">{numberWithCommas(Number(totalPrice))} VNĐ</div>
                     </div>
                     <div className="input-checkbox">
                        <input type="checkbox" id="terms" form="payment" />
                        <label htmlFor="terms">
                           <span></span>
                           Tôi đồng ý với các <a href="#">Điều khoản & và điều kiện</a>
                        </label>
                     </div>
                     <div className="text-right">
                        <button className=" btn-success my-1">Tiếp tục mua hàng</button>
                        <button className=" btn-success my-1" onClick={payment}>
                           Đặt hàng
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart

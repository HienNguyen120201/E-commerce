import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { searchProduct } from "./../redux/action/shopAction"
import LoginUser from "../components/Log/LoginUser"

const Header = () => {
   let navigate = useNavigate()
   const dispatch = useDispatch()
   const [keyword, setKeyword] = useState("")

   const handleSearch = (e) => {
      e.preventDefault()
      dispatch(searchProduct(keyword))
      navigate(`/Search/${keyword}`)
   }
   const isLogin = useSelector((state) => state.login.isLogin)
   const user = useSelector((state)=>state.login.userInfo)
   return (
      <div>
         <div id="top-header">
            <div className="container ">
               <ul className="header-links pull-left">
                  <li className="href">
                     <i className="fa fa-phone"></i> 0394003431
                  </li>
                  <li className="href">
                     <i className="far fa-envelope"></i> Mail@hcmut.edu.vn
                  </li>
                  <li className="href">
                     <i className="fa fa-map-marker"></i> Ho Chi Minh
                  </li>
               </ul>
               <ul className="header-links pull-right">
                  {
                     isLogin ? <LoginUser user={user}/>:
                     <Link to="/Login">
                     <li className="href">
                     <i className="fa fa-user"></i>Đăng nhập
                     </li>
                     </Link>
                  }         
               </ul>
            </div>
         </div>
         <div id="header">
            <div className="container">
               <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                     <div className="header-search">
                        <form>
                           <input
                              className="input-select"
                              placeholder="Tìm kiếm tại đây"
                              value={keyword}
                              onChange={(e) => setKeyword(e.target.value)}
                           />
                           <button className="search-btn" onClick={handleSearch}>
                              Search
                           </button>
                        </form>
                     </div>
                  </div>
                  <div className="col-md-3 clearfix">
                     <div className="header-ctn">
                        <div>
                           <Link to="/Cart">
                              <i className="fa fa-shopping-cart"></i>
                              <span>Giỏ hàng</span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="navigation">
            <div className="container">
               <div id="responsive-nav">
                  <ul className="main-nav">
                     <Link to="/Home">
                        <li className="nav_li">Trang chủ</li>
                     </Link>
                     <Link to="/Laptop" >
                        <li className="nav_li">Laptop</li>
                     </Link>
                     <Link to="/Mobile">
                        <li className="nav_li">Điện thoại</li>
                     </Link>
                     <Link to="/Accessory">
                        <li className="nav_li">Phụ kiện</li>
                     </Link>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header

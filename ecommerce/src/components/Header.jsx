import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
		<div id="top-header">
			<div className="container ">
				<ul className="header-links pull-left">
					<li className="href"><i className="fa fa-phone"></i> 0394003431</li>
					<li className="href"><i className="far fa-envelope"></i> Mail@hcmut.edu.vn</li>
					<li className="href"><i className="fa fa-map-marker"></i> Ho Chi Minh</li>
				</ul>
				<ul className="header-links pull-right">
					<li className="href"><i className="fa fa-user"></i>Đăng nhập</li>
				</ul>
			</div>
		</div>
		<div id="header">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
					</div>
					<div className="col-md-6">
						<div className="header-search">
							<form>
								<input className="input-select" placeholder="Tìm kiếm tại đây"/>
								<button className="search-btn">Search</button>
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
							<Link to="/Shop">
                                        <li className="nav_li">Cửa hàng</li>
                            </Link>
							<Link to="/Moblie">
                                        <li className="nav_li">Tin tức</li>
                            </Link>
							<Link to="/Accessory">
                                        <li className="nav_li">Liên hệ</li>
                            </Link>
						</ul>
					</div>
				</div>
	</div>
    </div>
	
  )
}

export default Header
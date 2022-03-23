import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Mọi thắc mắc vui lòng liên hệ</h3>
								<ul className="footer-links">
									<li><a href="#"><i className="fa fa-map-marker"></i>Hồ Chí Minh</a></li>
									<li><a href="#"><i className="fa fa-phone"></i>0394003434</a></li>
									<li><a href="#"><i className="far fa-envelope"></i>Mail@hcmut.edu.vn</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Các dòng sản phẩm</h3>
								<ul className="footer-links">
									<li><a href="#">Laptops</a></li>
									<li><a href="#">Di động</a></li>
									<li><a href="#">Phụ kiện</a></li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>
						<div className="col-md-4 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Dịch vụ</h3>
								<ul className="footer-links">
									<li><a href="#">Thanh toán online, tiết kiệm thời gian</a></li>
									<li><a href="#">Mua online, giao hàng tận nơi</a></li>
									<li><a href="#">Tri ân khách hàng</a></li>
									<li><a href="#">Mua trả góp lãi xuất 0%</a></li>
									<li><a href="#">Hỗ trợ giải đáp mọi thắc mắc</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </div>
  )
}

export default Footer
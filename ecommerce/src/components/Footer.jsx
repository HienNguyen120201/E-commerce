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
									<li><i className="fa fa-map-marker"></i>Hồ Chí Minh</li>
									<li><i className="fa fa-phone"></i>0394003434</li>
									<li><i className="far fa-envelope"></i>Mail@hcmut.edu.vn</li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Các dòng sản phẩm</h3>
								<ul className="footer-links">
									<li>Laptop</li>
									<li>Di động</li>
									<li>Phụ kiện</li>
								</ul>
							</div>
						</div>

						<div className="clearfix visible-xs"></div>
						<div className="col-md-4 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Dịch vụ</h3>
								<ul className="footer-links">
									<li>Thanh toán online, tiết kiệm thời gian</li>
									<li>Mua online, giao hàng tận nơi</li>
									<li>Tri ân khách hàng</li>
									<li>Mua trả góp lãi xuất 0%</li>
									<li>Hỗ trợ giải đáp mọi thắc mắc</li>
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
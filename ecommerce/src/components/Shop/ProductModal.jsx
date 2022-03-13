import "./../../css/ShopStyle/ProductModal.css"
import Grid from "@mui/material/Grid"
import { AiOutlineClose } from "react-icons/ai"
import { BsStarFill, BsCheckLg } from "react-icons/bs"
import img from "./../../img/iphone-11-128gb-chinh-hang_2.jpg"
import img2 from "./../../img/samsung-galaxy-s22-128gb.jpg"
import SimpleSlider from "./../Shop/SimpleSlider"
import { useState } from "react"
import Slide from "@mui/material/Slide"
import {addItem} from "../../redux/shop-cart/cartItem"
import { useDispatch } from 'react-redux'

const formatVND = (num) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num)
}

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />
}
const listImg = [img, img2, img, img2]
const listThums = [img, img2, img, img2]
const sizeImg = 350
const listColor = ["navy", "yellow", "pink", "green"]
const listSize = ["64GB", "128GB", "256GB"]

function ProductModal({ handleClose, openToastSuccess, openToastError }) {
  const dispatch = useDispatch()
  const [colorIndex, setcolorIndex] = useState(null)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [sizeIndex, setSizeIndex] = useState(null)
  const [qty, setQty] = useState(1)

  const handleClick = () => {
    if (color !== "" && size !== "") {
      return true
    } else {
      let msg = ""
      if (color === "" && size === "") msg = "Bạn cần chọn màu và dung lượng"
      else if (color === "") msg = "Bạn cần chọn màu"
      else msg = "Bạn cần chọn dung lượng"
      openToastError(TransitionLeft, msg)
      return false
    }
  }
const addToCart = () => {
        if (handleClick()) {
            let newItem = {
              productId: 1,
                unitPrice: 200000,
                quantity: 1,
                name:"Iphone11",
                color: color,
                size: size
            }
            if (dispatch(addItem(newItem))) {
                alert('Success')
            } else {
                alert('Fail')
            }
        }
    }
  return (
    <div className="prodModal-container">
      <div className="prodModal__header">
        <button className="close">
          <AiOutlineClose fontSize="2.5rem" onClick={handleClose} />
        </button>
      </div>
      <div className="prodModal__body">
        <Grid container>
          <Grid item lg={5} sm={12} className="prodModal__left">
            <SimpleSlider listImg={listImg} listThums={listThums} sizeImg={sizeImg} />
          </Grid>
          <Grid item lg={7} md={6} sm={12}>
            <div className="prodModal__details">
              <h2>Iphone 11 64GB Chính Hãng VN/A</h2>

              <div className="prodRating-wrap">
                <div className="prodRating__star">
                  <BsStarFill fontSize="1.6rem" style={ratingStyle} />
                  <BsStarFill fontSize="1.6rem" style={ratingStyle} />
                  <BsStarFill fontSize="1.6rem" style={ratingStyle} />
                  <BsStarFill fontSize="1.6rem" style={ratingStyle} />
                  <BsStarFill fontSize="1.6rem" style={ratingStyle} />
                </div>
                <div className="prodRaing__digit">5.0</div>
                <div className="proRating__stat">
                  <span>60 Nhận xét</span>
                  <span>200 Đã mua</span>
                </div>
              </div>

              <p>
                iPhone 11 với 6 phiên bản màu sắc, camera có khả năng chụp ảnh vượt trội, thời lượng
                pin cực dài và bộ vi xử lý mạnh nhất từ trước đến nay sẽ mang đến trải nghiệm tuyệt
                vời dành cho bạn.
              </p>

              <div className="proModal__price">
                <span className="new_price">{formatVND(14999000)}</span>
                <span className="market_price">{formatVND(17999000)}</span>
              </div>

              <div className="proModal__color">
                <p>Màu sắc: {color}</p>
                <ul>
                  {listColor.map((item, idx) => {
                    return (
                      <li
                        className={item}
                        key={idx}
                        onClick={() => {
                          setColor(item)
                          setcolorIndex(idx)
                        }}
                      >
                        <div
                          className={colorIndex === idx ? "icon-check" : "icon-check hidden-check"}
                        >
                          <BsCheckLg fontSize="2rem" />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="proModal__size">
                <p>Dung lượng</p>
                <ul>
                  {listSize.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        onClick={() => {
                          setSize(item)
                          setSizeIndex(idx)
                        }}
                        className={sizeIndex === idx ? "size-check" : ""}
                      >
                        <span>{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="proModal__qty">
                <p>Số lượng</p>
                <div className="cart-plus-minus">
                  <div
                    className="decrease"
                    onClick={() => setQty((prev) => (prev === 1 ? 1 : prev - 1))}
                  >
                    -
                  </div>
                  <input
                    type="text"
                    className="quantity-box"
                    name="qtybutton"
                    value={qty}
                    readOnly
                  />
                  <div className="increase" onClick={() => setQty((prev) => prev + 1)}>
                    +
                  </div>
                </div>
              </div>

              <div className="prodModal__meta">
                <ul>
                  <li>
                    <span>Danh mục: </span>
                    <a href="/">Điện thoại</a>
                    <a href="/">Iphone</a>
                  </li>
                  <li>
                    <span>Tag: </span>
                    <a href="/">Ip11</a>
                    <a href="/">Apple</a>
                  </li>
                </ul>
              </div>

              <div className="prodModal__action">
                <div className="prodModal_add">
                  <button className="btn" onClick={() => addToCart()}>
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="prodModal__checkout">
                  <button className="btn" onClick={handleClick}>
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const ratingStyle = {
  color: "#f1c40f",
  marginRight: ".4rem",
}
export default ProductModal

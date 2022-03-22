import "./../../css/ShopStyle/ProductModal.css"
import Grid from "@mui/material/Grid"
import axios from 'axios';
import { AiOutlineClose } from "react-icons/ai"
import { BsStarFill, BsCheckLg, BsStarHalf } from "react-icons/bs"
import SimpleSlider from "./../Shop/SimpleSlider"
import { useState, useEffect } from "react"
import Slide from "@mui/material/Slide"
import { useSelector, useDispatch } from "react-redux"
import { getSelectedProduct } from "./../../redux/action/shopAction"
import "./../../css/ShopStyle/components.css"
import { addItem } from "../../redux/shop-cart/CartItemsSlide"

const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num)
}

function TransitionLeft(props) {
   return <Slide {...props} direction="left" />
}

const sizeImg = 350

function ProductModal({ handleClose, openToastSuccess, openToastError, currId }) {
   /*
   * --------------------------------  HOOK ----------------------------------- */

   const dispatch = useDispatch()
   const curProduct = useSelector((state) => state.shop.selectedProduct)
   const [colorIndex, setcolorIndex] = useState(null)
   const [colorCheck, setColorCheck] = useState("")
   const [sizeCheck, setSizeCheck] = useState("")
   const [sizeIndex, setSizeIndex] = useState(null)
   const [qty, setQty] = useState(1)
   const [dataReturn, setDataReturn] = useState(false)

   /*
   * --------------------------------  EVENT HANDLER ------------------------- */
   const isLogin = useSelector((state) => state.login.isLogin)
   const user = useSelector((state)=>state.login.userInfo)
   console.log(isLogin)
   console.log(user)
   const handleClick = async () => {
      if(isLogin)
         {
            const product = {
            productId: curProduct[0].id,
            name: curProduct[0].name,
            unitPrice: curProduct[0].discount_price,
            color: colorCheck,
            size: sizeCheck,
            quantity: qty,
            image1: curProduct[0].imageList[colorIndex],
            }
            var UserName = {UserName:user}
            var cartproduct = {...product,...UserName}
            console.log(cartproduct)
            axios.post("https://localhost:44306/api/Product",cartproduct);
         }
      else if (colorCheck !== "" && sizeCheck !== "") {
            const product = {
            productId: curProduct[0].id,
            name: curProduct[0].name,
            unitPrice: curProduct[0].discount_price,
            color: colorCheck,
            size: sizeCheck,
            quantity: qty,
            image1: curProduct[0].imageList[colorIndex],
         }
         openToastSuccess(TransitionLeft)
            dispatch(addItem(product))
         
         } else {
         let msg = ""
         if (colorCheck === "" && sizeCheck === "") msg = "Bạn cần chọn màu và dung lượng"
         else if (colorCheck === "") msg = "Bạn cần chọn màu"
         else msg = "Bạn cần chọn dung lượng"
         openToastError(TransitionLeft, msg)
      }
   }

   useEffect(() => {
      dispatch(getSelectedProduct(currId))
   }, [])

   useEffect(() => {
      setDataReturn(true)
   }, [curProduct])

   /*-------------------------------------------------------------------------- */

   if (!dataReturn) {
      return <div>loading</div>
   } else {
      let {
         name,
         type,
         market_price,
         discount_price,
         colorList,
         sizeList,
         short_description,
         rating_average,
         review_count,
         sell_count,
         imageList,
      } = curProduct[0]

      let rating_average1 = Math.floor(rating_average * 2 + 0.5) / 2
      const dAverage = Math.floor(rating_average1)
      const rating = []
      for (let i = 1; i <= dAverage; i++) {
         rating.push(<BsStarFill fontSize="1.6rem" style={ratingStyle} />)
      }
      if (rating_average1 > dAverage) rating.push(<BsStarHalf fontSize="1.6rem" style={ratingStyle} />)

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
                     <SimpleSlider listImg={imageList} listThums={imageList} sizeImg={sizeImg} />
                  </Grid>
                  <Grid item lg={7} md={6} sm={12}>
                     <div className="prodModal__details">
                        <h2>{name}</h2>

                        <div className="prodRating-wrap">
                           <div className="prodRating__star">{rating}</div>
                           <div className="prodRaing__digit">{rating_average}</div>
                           <div className="proRating__stat">
                              <span>{review_count} Nhận xét</span>
                              <span>{sell_count} Đã mua</span>
                           </div>
                        </div>

                        <p>{short_description}</p>

                        <div className="proModal__price">
                           <span className="new_price">
                              {formatVND((discount_price + 1000000 * sizeIndex) * qty)}
                           </span>
                           <span className="market_price">
                              {formatVND((market_price + 1000000 * sizeIndex) * qty)}
                           </span>
                        </div>

                        <div className="proModal__color">
                           <p>Màu sắc: {colorCheck}</p>
                           <ul>
                              {colorList.map((item, idx) => {
                                 return (
                                    <li
                                       className={item}
                                       key={idx}
                                       onClick={() => {
                                          setColorCheck(item)
                                          setcolorIndex(idx)
                                       }}
                                    >
                                       <div
                                          className={
                                             colorIndex === idx ? "icon-check" : "icon-check hidden-check"
                                          }
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
                              {sizeList.map((item, idx) => {
                                 return (
                                    <li
                                       key={idx}
                                       onClick={() => {
                                          setSizeCheck(item)
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
                                 <a href="/">{type}</a>
                                 <a href="/">{name.split(" ")[0]}</a>
                              </li>
                              <li>
                                 <span>Tag: </span>
                                 <a href="/">{type}</a>
                                 <a href="/">{name.split(" ")[0]}</a>
                              </li>
                           </ul>
                        </div>

                        <div className="prodModal__action">
                           <div className="prodModal_add">
                              <button className="btn1" onClick={handleClick}>
                                 Thêm vào giỏ
                              </button>
                           </div>
                           <div className="prodModal__checkout">
                              <button className="btn1">Thanh toán</button>
                           </div>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </div>
      )
   }
}

const ratingStyle = {
   color: "#f1c40f",
   marginRight: ".4rem",
}
export default ProductModal

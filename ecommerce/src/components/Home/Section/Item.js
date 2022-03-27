import React from 'react';
import { FaStar, FaCartPlus, FaHeart } from "react-icons/fa";
// FaStar
import '../../../css/HomeStyle/Item.css'
import '../../../css/ShopStyle/ProductItem.css'

import { Link } from "react-router-dom"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import Grow from "@mui/material/Grow"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import ProductModal from "../ProductModal"

function Item (props) {
    const [open, setOpen] = React.useState(false)
    const [scroll, setScroll] = React.useState("paper")
    const [transition, setTransition] = React.useState(undefined)
    const [openToastSuccess, setOpenToastSuccess] = React.useState(false)
    const [msgError, setMsgError] = React.useState("")
    const [openToastError, setOpenToastError] = React.useState(false)
    const handleClickOpen = (scrollType) => () => {
    setOpen(true)
        setScroll(scrollType)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleClickToastSuccess = (Transition) => {
        setTransition(() => Transition)
        setOpenToastSuccess(true)
    }
    const handleCloseToastSuccess = (event, reason) => {
        console.log("close")
        if (reason === "clickaway") {
            return
    }
        setOpenToastSuccess(false)
    }

    const handleClickToastError = (Transition, message) => {
        setMsgError(message)
        setTransition(() => Transition)
        setOpenToastError(true)
    }

    const handleCloseToastError = (reason, message) => {
        console.log("close")
        if (reason === "clickaway") {
            return
        }
        setOpenToastError(false)
    }

    const descriptionElementRef = React.useRef(null)
    React.useEffect(() => {
    if (open) {
        const { current: descriptionElement } = descriptionElementRef
        if (descriptionElement !== null) {
            descriptionElement.focus()
        }
    }
    }, [open])
  
    return (
        <div className="item">

            <div className="item-img">
                <img src={props.imageLink} alt="product">
                </img>
            </div>
            <p className="device">
                {props.type} 
            </p>
            <p className="device-name" onClick={handleClickOpen("body")}>
                {props.productName}
            </p>

            <Dialog
               open={open}
               onClose={handleClose}
               scroll={scroll}
               aria-labelledby="scroll-dialog-title"
               aria-describedby="scroll-dialog-description"
               maxWidth="lg"
               transition={Grow}
               transitionDuration={500}
            >
               <DialogContent dividers={scroll === "body"} sx={{ width: 1000 }}>
                  <ProductModal
                     handleClose={handleClose}
                     openToastSuccess={handleClickToastSuccess}
                     openToastError={handleClickToastError}
                     currId={props.currId}
                  />
               </DialogContent>
            </Dialog>

            <p className="price">
                <span>{props.productPrice}</span> VND    
            </p>
            <p className="old-price">
                {props.protductOldPrice}
            </p>
            <div className="rating">
                <div className="horizontal-line"></div>
                <span className="stars">
                    {
                        props.stars.map((star, index) => 
                            <FaStar key={index} />
                        )
                    }
                </span>
                <div className="horizontal-line"></div>
            </div>
            <div className="itemBtn">
                <FaCartPlus className="cartBtn" onClick={handleClickOpen("body")}/>
                <FaHeart className="heartBtn" />
            </div>

            <Snackbar
               open={openToastError}
               autoHideDuration={3000}
               onClose={handleCloseToastError}
               TransitionComponent={transition}
               anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
               <Alert onClose={handleCloseToastError} severity="error" sx={{ width: "100%" }} fontSize="3rem">
                  <p style={{ fontSize: "1.6rem", fontWeight: 500 }}>{msgError}</p>
               </Alert>
            </Snackbar>

            <Snackbar
               open={openToastSuccess}
               autoHideDuration={3000}
               onClose={handleCloseToastSuccess}
               TransitionComponent={transition}
               anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
               <Alert onClose={handleCloseToastError} severity="success" sx={{ width: "100%" }} fontSize="3rem">
                  <p style={{ fontSize: "1.6rem", fontWeight: 600 }}>Đã thêm sản phẩm vào giỏ</p>
               </Alert>
            </Snackbar>
        </div>
    )
}

export default Item;
import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/ProductItem.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import Grow from "@mui/material/Grow";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductModal from "./ProductModal";

const formatVND = (num) =>{
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
}

function ProductItem({title, imgSrc, discount_price, market_price, isSale, saleText}) {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");
    const [transition, setTransition] = React.useState(undefined);
    const [openToastSuccess, setOpenToastSuccess] = React.useState(false);
    const [msgError, setMsgError] = React.useState("");
    const [openToastError, setOpenToastError] = React.useState(false);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickToastSuccess = (Transition) => {
        setTransition(() => Transition);
        setOpenToastSuccess(true);
    };
    const handleCloseToastSuccess = (event, reason) => {
        console.log('close');
        if (reason === "clickaway") {
            return;
        }
        setOpenToastSuccess(false);
    };

    const handleClickToastError = (Transition, message) => {
        setMsgError(message);
        setTransition(() => Transition);
        setOpenToastError(true);
    };

    const handleCloseToastError = (reason, message) => {
        console.log('close');
        if (reason === "clickaway") {
            return;
        }
        setOpenToastError(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);


    return (
        <div className="product-item">
            <div className="product-item__image">
                <Link to="/">
                    <img src={imgSrc} alt="dienthoai" width="200px" />
                </Link>
            </div>

            <div className="product-item__info">
                <p to="/"
                    onClick={handleClickOpen("body")}
                >
                    {title}
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
                    
                    // style ={{width: "1500px"}}
                    // fullWidth = {false}
                >
                    <DialogContent dividers={scroll === "body"} sx={{width: 1000}}>
                        <ProductModal 
                            handleClose = {handleClose}
                            openToastSuccess = {handleClickToastSuccess}
                            openToastError ={handleClickToastError}
                        />
                    </DialogContent>
                </Dialog>

                <div className="product-item__price">
                    <span className="discount-price">{formatVND(discount_price)}</span>
                    {isSale ? (<span className="market-price">{formatVND(market_price)}</span>): ""}
                </div>
                <div className="product-item-button-area">
                    <div className="btn-small green-gradient">Trả góp 0%</div>
                    {isSale? (<div className="btn-small red-gradient">{saleText}</div>): ""}
                </div>

                {/** TOAST AREA*/}
                
                <Snackbar 
                    open={openToastError}
                    autoHideDuration={3000}
                    onClose={handleCloseToastError}
                    TransitionComponent = {transition}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                >
                    <Alert 
                        onClose={handleCloseToastError}
                        severity = "error"
                        sx={{ width: "100%" }}
                        fontSize="3rem"
                    >
                        <p style={{fontSize: "1.6rem", fontWeight: 500}}>{msgError}</p>
                    </Alert>
                </Snackbar>

                <Snackbar 
                    open={openToastSuccess}
                    autoHideDuration={3000}
                    onClose={handleCloseToastSuccess}
                    TransitionComponent = {transition}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                >
                    <Alert 
                        onClose={handleCloseToastError}
                        severity = "success"
                        sx={{ width: "100%" }}
                        fontSize="3rem"
                    >
                        <p style={{fontSize: "1.6rem", fontWeight: 600}}>Đã thêm sản phẩm vào giỏ</p>
                    </Alert>
                </Snackbar>

            </div>
        </div>
    );
}

export default ProductItem;

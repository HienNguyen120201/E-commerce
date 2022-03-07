import React from "react";
import Container from "@mui/material/Container";
import "./../index.css";
import styles from "./../assets/css/Header.module.css";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__contact}>
                <Container maxWidth="lg">
                    <ul className={styles.header__contact_list}>
                        <li>
                            <Link to="/">
                                <i>
                                    <AiFillPhone color="red" fontSize="16px" />
                                </i>
                                0394003431
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i>
                                    <AiOutlineMail
                                        color="red"
                                        fontSize="16px"
                                    />
                                </i>
                                EcommerceStore@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i>
                                    <MdLocationPin
                                        color="red"
                                        fontSize="16px"
                                    />
                                </i>
                                Hồ Chí Minh
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i>
                                    <FaUser color="red" fontSize="16px" />
                                </i>
                                Đăng nhập
                            </Link>
                        </li>
                    </ul>
                </Container>
            </div>

            <div style={{ backgroundColor: "#15161D" }}>
                <Container
                    className={styles.header__action}
                    style={{ display: "flex" }}
                >
                    <div className={styles.header__search}>
                        <input
                            type="text"
                            placeholder="Tìm kiếm tại đây"
                            className={styles.header__search_input}
                        />
                        <Link to="/" className={styles.header__search_submit}>
                            Tìm kiếm
                        </Link>
                    </div>
                    <div className={styles.header__cart}>
                        <Badge badgeContent={4} color="error">
                            <FaShoppingCart fontSize="2rem" />
                        </Badge>
                        <p style={{ fontSize: "1.5rem", paddingTop: "5px" }}>
                            Giỏ hàng
                        </p>
                    </div>
                </Container>
            </div>
            <div className={styles.header__navigation}>
                <Container maxWidth="lg">
                    <NavLink
                        to="/"
                        style={navStyle}
                        className={`${styles.header__shape}`}
                    >
                        <span>Trang chủ</span>
                    </NavLink>
                    <NavLink
                        to="/shop"
                        style={navStyle}
                        className={`${styles.header__shape}`}
                    >
                        <span>Cửa hàng</span>
                    </NavLink>
                    <NavLink
                        to="/news"
                        style={navStyle}
                        className={`${styles.header__shape}`}
                    >
                        <span>Tin tức</span>
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={navStyle}
                        className={`${styles.header__shape}`}
                    >
                        <span>Về chúng tôi</span>
                    </NavLink>
                </Container>
            </div>
        </div>
    );
}

const navStyle = {
    fontSize: "1.6rem",
    color: "#111",
    bgcolor: "#fff",
};

export default Header;

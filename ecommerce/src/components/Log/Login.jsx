import React from "react";
import "../../css/LogStyle/Login.css";
import fb_icon from "../../img/fb_icon.png";
import gg_icon from "../../img/gg_icon.png";
import tw_icon from "../../img/tw_icon.png";
import { Link } from 'react-router-dom'


function Login_compo()
{

    return(
    
        

   

        <div className="login_page">

        <img className="fb" src={fb_icon} alt="1" />
        <img className="gg" src={gg_icon} alt="2" />
        <img className="tw" src={tw_icon} alt="3" />
                <div className="Login_frame">
                    <div className="logtext">Đăng Nhập</div>

                    <div className="login_box">

                        <input
                            className="username"
                            type="text"
                            placeholder="Tên tài khoản"
                        />
                        <br />

                        <input
                            className="pass"
                            type="password"
                            placeholder="Mật khẩu"
                        />
                        <Link to="/Home">
                        <button className="back_text">Trở lại</button>
                        </Link>
                        <button className="login_text">Đăng nhập</button>
                    </div>

                    

                    <br />
                    
                </div>
                <hr />
   

                <div className="SignUp">
                    <p className="signuptext">Bạn chưa có tài khoản?</p>
                    <Link to="/Register">
                    <a className="signuplink" href="">
                        Đăng ký
                    </a>
                    </Link>
                    <hr />

                    <Link to="/Resetpass">
                    <a className="lostpasstext" href="">
                            Quên mật khẩu
                    </a>
                    </Link>
                </div>
        </div>


        
        
    
    );

}

export default Login_compo;
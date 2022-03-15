import React from "react";
import "../css/Login.css";
import background from "../img/background.jpeg";
import fb_icon from "../img/fb_icon.png";
import gg_icon from "../img/gg_icon.png";
import tw_icon from "../img/tw_icon.png";


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
                            placeholder="   Tên tài khoản"
                        />
                        <br />

                        <input
                            className="pass"
                            type="password"
                            placeholder="   Mật khẩu"
                        />

                        <button className="back_text">Trở lại</button>
                        <button className="login_text">Đăng nhập</button>
                    </div>

                    

                    <br />
                    
                </div>
                <hr />
   

                <div className="SignUp">
                    <p className="signuptext">Bạn chưa có tài khoản?</p>
                    <a className="signuplink" href="">
                        Đăng ký
                    </a>
                    <hr />
                    <a className="lostpasstext" href="">
                            Quên mật khẩu
                    </a>
                </div>
        </div>


        
        
    
    );

}

export default Login_compo;
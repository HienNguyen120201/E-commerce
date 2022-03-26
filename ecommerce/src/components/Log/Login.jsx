import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {setLoginAction} from '../../redux/Login/LoginUser';
import { useNavigate } from 'react-router-dom';
import "../../css/LogStyle/Login.css";
import fb_icon from "../../img/fb_icon.png";
import gg_icon from "../../img/gg_icon.png";
import tw_icon from "../../img/tw_icon.png";
import { Link } from 'react-router-dom'



function Login_compo()
{
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [login, setLogin] = useState({
    UserName: "",
    PasswordHash: "",
    });
    const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
    const Login = async (e) => {
    e.preventDefault();
      const result = await axios.post(
        "https://localhost:44306/api/Home",
        login)
      if (result.data) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("user", JSON.stringify(result.data));
        const dataload = {
          isLogin: true,
          userInfo: result.data,
        }
        dispatch(setLoginAction(dataload));
        navigate("/");
      }
      else{
        alert("Đăng nhập không thành công! Vui lòng thử lại!");
      }
      
  };
  

    return(
    
        

   

        <div className="login_page">




        <a className="tw_link" >
        <img className="tw" src={tw_icon} alt="3" />
        </a>

        <a className="gg_link" >
        <img className="gg" src={gg_icon} alt="2" />
        </a>

        <a className="fb_link" >
             <img className="fb" src={fb_icon} alt="1" />
        </a>






        

<br />

                <div className="Login_frame">
                    <div className="logtext">Đăng Nhập</div>

                    <div className="login_box">

                        <input
                            name="UserName"
                            onChange={handleChangeLogin}
                            className="username"
                            type="text"
                            placeholder="Tên tài khoản"
                        />
                        <br />

                        <input
                            name="PasswordHash"
                            onChange={handleChangeLogin}
                            className="pass"
                            type="password"
                            placeholder="Mật khẩu"
                        />
                        <Link to="/Home">
                        <button className="back_text">Trở lại</button>
                        </Link>
                        <button className="login_text" onClick={Login}>Đăng nhập</button>
                    </div>

                    

                    <br />
                    
                </div>
                <hr />
   

                <div className="SignUp">
                  <div>
                    <p className="signuptext">Bạn chưa có tài khoản?</p>
                  </div>
                    
                    <Link to="/Register">
                      <div className="signuplink">
                       <p>Đăng ký</p> 
                      </div>
                    
                    </Link>
                    <hr />
                </div>
        </div>


        
        
    
    );

}

export default Login_compo;
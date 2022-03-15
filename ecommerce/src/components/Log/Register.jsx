import React from "react";
import "../../css/LogStyle/Register.css";
import { Link } from 'react-router-dom'




function Register_compo()
{

    return(
    
        

   

        <div className="register_page">
    <div className="register_frame">
        <div className="registtext">Đăng kí</div>

        <div className="register_box">

            <input className="username" type="text" placeholder="Tên tài khoản"/> <br/>

            <input
                className="pass"
                type="password"
                placeholder="Mật khẩu (đủ 4 loại)"
            />



            <input className="verify_pass" type="text" placeholder="Xác nhận mật khẩu"/> <br/>
            <input className="name" type="text" placeholder="Họ và tên"/> <br/>
            <input className="phone_number" type="text" placeholder="Số điện thoại"/> <br/>
            <input className="email" type="text" placeholder="Email"/> <br/>
            

            <input className="birth" type="date" id="date" name="trip-start"
                        
                        min="1900-01-01" max="2022-03-15"></input>


            <select className="sex"  name="sex" id="sex">
                <option value="Male" >Nam</option>
                <option value="Female" >Nữ</option>
            </select>






            
            <Link to="/Login">
            <button className="back_text">Trở lại</button>
            </Link>
            <button className="register_text">Đăng kí</button>
        </div>

        

        <br />
        
    </div>
    <hr />


    
</div>


        
        
    
    );

}

export default Register_compo;
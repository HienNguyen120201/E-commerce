import React from "react";
import { Link } from 'react-router-dom'
import "../../css/LogStyle/ResetPass.css"

function ResetPass_compo(){
    return(

<div className="reset_page">


        <div className="reset_frame">
            <div className="resettext">Quên mật khẩu</div>

            <div className="reset_box">

                <input
                    className="username"
                    type="text"
                    placeholder="Tên tài khoản"
                />
                <br />

                
                <Link to="/Login">
                <button className="back_text">Trở lại</button>
                </Link>
                <button className="SendEmail">Khôi phục</button>
            </div>

            

            <br />
            
        </div>
        <hr />


       
</div>


    )
}

export default ResetPass_compo;

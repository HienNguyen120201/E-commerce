import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../css/LogStyle/Register.css";
import { Link } from 'react-router-dom'




function Register_compo()
{
    let navigate = useNavigate();
    const [SignUp, setSignUp] = useState(
    {
      FullName: "",
      UserName: "",
      PasswordHash: "",
      PhoneNumber: "",
      Email: "",
      BirthDay:"",
      Sex: ""
    }
  );
    const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setSignUp({...SignUp, [name]: value});
  }

  const Register = async (e) => {
    const cfpass = document.getElementById('cfpass');
    if (cfpass.value !== SignUp.PasswordHash)
    {
      alert('Mật khẩu không khớp! Vui lòng nhập lại!');
      return;
    }
    try {
      const result = await axios.post(
        "https://localhost:44306/api/Home/PostRegisterAsync",
        SignUp
      );
      alert("Đăng ký thành công!");
      navigate("/");
    } catch (err) {
      alert("Đăng ký không thành công!");
    }
  }

    return(
    
        

   

        <div className="register_page">
    <div className="register_frame">
        <div className="registtext">Đăng kí</div>

        <div className="register_box">

            <input className="username" type="text" placeholder="Tên tài khoản" name="UserName" onChange={handleChangeRegister}/> <br/>

            <input
                className="pass"
                type="password"
                placeholder="Mật khẩu (đủ 4 loại)"
                name="PasswordHash"
                onChange={handleChangeRegister}
            />



            <input className="verify_pass" type="password" placeholder="Xác nhận mật khẩu" name="cfpassword"
                        id="cfpass"  onChange={handleChangeRegister}/> <br/>
            <input className="name" type="text" placeholder="Họ và tên" name="FullName" onChange={handleChangeRegister}/> <br/>
            <input className="phone_number" type="text" placeholder="Số điện thoại" name="PhoneNumber" onChange={handleChangeRegister}/> <br/>
            <input className="email" type="text" placeholder="Email" name="Email" onChange={handleChangeRegister}/> <br/>
            

            <input className="birth" type="date" id="date" min="1900-01-01" max="2022-03-15" name="BirthDay" onChange={handleChangeRegister}></input>


            <select className="sex"  name="Sex" id="sex" onChange={handleChangeRegister}>
                <option value="Male" >Nam</option>
                <option value="Female" >Nữ</option>
            </select>






            
            <Link to="/Login">
            <button className="back_text">Trở lại</button>
            </Link>
            <button className="register_text" onClick={Register}>Đăng kí</button>
        </div>

        

        <br />
        
    </div>
    <hr />


    
</div>


        
        
    
    );

}

export default Register_compo;
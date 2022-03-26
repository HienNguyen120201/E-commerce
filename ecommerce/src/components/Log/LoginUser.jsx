import React from 'react'
import { useDispatch } from 'react-redux';
import { delLoginAction } from '../../redux/Login/LoginUser';
import { useNavigate } from 'react-router-dom';

const LoginUser = props => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const LogOut=()=>{
    dispatch(delLoginAction());
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="Logout">
      <div className="LoginUser">Xin chào {props.user}</div>
    <div className="LoginUser1" onClick={LogOut} ><i className="fas fa-sign-out-alt"></i></div>
    </div>
    
  )
}

export default LoginUser
import React from 'react'
import { useDispatch } from 'react-redux';
import { delLoginAction } from '../../redux/Login/LoginUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginUser = props => {
  const dispatch = useDispatch();
  const LogOut= async =>{
    dispatch(delLoginAction());
    localStorage.clear();
  }
  return (
    <div className="Logout">
      <div className="LoginUser">Xin chào {props.user}</div>
    <div className="LoginUser1" onClick={LogOut} ><i className="fas fa-sign-out-alt"></i></div>
    </div>
    
  )
}

export default LoginUser
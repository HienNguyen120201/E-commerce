import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { addItem } from '../redux/shop-cart/CartItemsSlide.js';

const HomePage = () => {
  const isLogin = useSelector((state) => state.login.isLogin)
  let [cartItemUser,setCartItemUser]=useState([])
  const [didMount, setDidMount] = useState(false); 
  let user = useSelector((state)=>state.login.userInfo)
  const dispatch = useDispatch()
  console.log(isLogin)
  useEffect(() => {
        if(isLogin)
        {
          axios.post("https://localhost:44306/api/Product/GetBill",{UserName:user})
            .then(res => {
                setCartItemUser(res.data)
        })
        }
        setDidMount(true);
          return () => setDidMount(false);
    },[])

  if(!didMount) {
    return null;
  }

  if(isLogin && cartItemUser.length >0)
  {
    for(var i=0;i<cartItemUser.length;i++)
        {
          const product = {
            productId: cartItemUser[i].productId,
            name: cartItemUser[i].productName,
            unitPrice: cartItemUser[i].unitPrice,
            color: cartItemUser[i].color,
            size: cartItemUser[i].size,
            quantity: 0
            }
            dispatch(addItem(product))
        }
  }
  console.log(cartItemUser)
  return (
    
    <div>
    </div>
  )
}

export default HomePage
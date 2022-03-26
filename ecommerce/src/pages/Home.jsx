import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { addItem } from '../redux/shop-cart/CartItemsSlide.js';
import {Sale, CountDownSale, NewProduct, BestSeller} from '../components/Home/Section/Section.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const saleList = [
  {
    id: 1,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/08/3-black.jpg',
    type: 'Tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000',
    protductOldPrice: '965.000 VND',
    stars: [1,2,3],
  },
  {
    id: 2,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/09/thumb_IP12Pro_3.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000',
    protductOldPrice: '965.000 VND',
    stars: [1,2,3],
  },
  {
    id: 3,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/08/2.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000',
    protductOldPrice: '965.000 VND',
    stars: [1,2,3],
  },
  {
    id: 4,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/10/xiaomi-11t-001.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000',
    protductOldPrice: '965.000 VND',
    stars: [1,2,3],
  },
  {
    id: 5,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/10/13-pro-black-copy.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000',
    protductOldPrice: '965.000 VND',
    stars: [1,2,3],
  },
 

  
]

const newProductList = [
  {
    id: 1,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/07/reno6z.jpg',
    type: 'Tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3],
  },
  {
    id: 2,
    imageLink: 'https://clickbuy.com.vn/uploads/2020/09/thumb_X7_2.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3],
  },
  {
    id: 3,
    imageLink: 'https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/0002_56294_a515_56__5.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3],
  },
  {
    id: 4,
    imageLink: 'https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/notebook-asus-vivobook-x413ja-211vbwb-70.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3],
  },
  {
    id: 5,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/10/oppo-a55-black.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3],
  },
 

  
]

const bestSellerList = [
  {
    id: 1,
    imageLink: 'https://clickbuy.com.vn/uploads/2021/10/oppo-a54-4g-black.jpg',
    type: 'Tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3,4,5],
  },
  {
    id: 2,
    imageLink: 'https://uqoojcos5nobj.vcdn.cloud/uploads/2021/01/redmi.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3,4],
  },
  {
    id: 3,
    imageLink: 'https://uqoojcos5nobj.vcdn.cloud/uploads/2021/10/airpod-3.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3,4,5],
  },
  {
    id: 4,
    imageLink: 'https://uqoojcos5nobj.vcdn.cloud/uploads/2021/10/Dell-Inspiron-5510-2021.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3,4],
  },
  {
    id: 5,
    imageLink: 'https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/notebook-asus-vivobook-x413ja-211vbwb-70.jpg',
    type: 'tai nghe',
    productName: 'tai nghe bluetooth xiaomi',
    productPrice: '690.000 VND',
    stars: [1,2,3],
  },
]


const saleContent = {
  title: 'khuyến mãi',
  itemList: saleList,
}

const newProductContent = {
  title: 'sản phẩm mới',
  itemList: newProductList
}

const bestSellerContent = {
  title: 'bán chạy nhất',
  itemList: bestSellerList
}


const Home = () => {
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
      <Sale 
        title={saleContent.title}
        itemList={saleContent.itemList}
        />

        <CountDownSale />

        <NewProduct 
        title={newProductContent.title}
        itemList={newProductContent.itemList}
        />



        <BestSeller  
        title={bestSellerContent.title}
        itemList={bestSellerContent.itemList}
        />
    </div>
  )
}

export default Home
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import "./../../css/ShopStyle/ShopFilter.css"
import CategoryCard from "./CategoryCard"
import FilterCard from "./FilterCard"
import Slider from "@mui/material/Slider"
import "./../../css/ShopStyle/components.css"
import { setFilters, filter, submitFilter } from "./../../redux/action/shopAction"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import queryString from 'query-string';

const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num)
}

function ShopFilter({ pathname }) {
   let navigate = useNavigate()
   const dispatch = useDispatch()
   const isLoaded = useSelector((state) => state.shop.isLoaded)
   const isFilter = useSelector((state) => state.shop.isFilter)

   /*
    * ------------------------  HOOK ------------------------------ */
   const products = useSelector((state) => state.shop.products)
   const filteredTag = useSelector((state) => state.shop.filteredTag)
   const [price, setPrice] = useState([1000, 50000000])
   const [optionScreen, setOptionScreen] = useState({
      allScreens: false,
      smallScreen: false,
      mediumScreen: false,
      largeScreen: false,
   })
   const [query, setQuery] = useState(window.location.search.substring(1))
   const [optionFeature, setOptionFeature] = useState({
      allFeatrues: false,
      finger: false,
      faceId: false,
      quickCharge: false,
      waterProof: false,
   })
   const [curActive, setCurActive] = useState("")

   const listTag = () => {
      const arrPrams = window.location.search.split("&")
      let listTags = []
      let urlPath = window.location.pathname.split("/")
      if (urlPath.length > 2) {
         listTags.push(urlPath.pop())
      }
     
      if (arrPrams.length > 2) {
         let i = 0
         for (i = 0; i < arrPrams.length; i++) if (arrPrams[i].includes("price")) break
         listTags.push("Giá từ " + arrPrams[i].split("=")[1] + " đến " + arrPrams[(i += 1)].split("=")[1])
         i++
         for (i; i < arrPrams.length; i++) {
            listTags.push(decodeURI(arrPrams[i].split("=")[1]))
         }
      }
      return listTags
   }
   const handleSelectType = (e) => {
      let x = e.target.innerHTML
      setQuery(`type=${x}&`)
      setCurActive("")
      // handleSetTag([x])
      dispatch(submitFilter([x]))
      if (isLoaded && x !== "") {
         dispatch(setFilters(true))
         dispatch(filter(`type=${x.toLowerCase()}`))
      }
   }

   /*
    *------------------------ HANDLE STATE CHANGE ----------------- */

   const handleSubmitFilter = () => {
      let queryParam = ""
   
      queryParam += filteredTag.length !== 0 ? `type=${filteredTag[0]}&`: ""
      if (price[0]) queryParam += `discount_price_gte=${price[0]}&discount_price_lte=${price[1]}`
      delete optionScreen.undefined

      for (const [key, value] of Object.entries(optionScreen)) {
         if (value) {
            queryParam += `&screen=${key}`
         }
      }

      for(const [key, value] of Object.entries(optionFeature)){
         if (value) {
            queryParam += `&feature=${key}`
         }
      }
      queryParam = queryParam[0] === "&" ? queryParam.substring(1) : queryParam
      navigate(`?${queryParam}`)
      setQuery(queryParam)

      dispatch(submitFilter(listTag()))
      if (products.length > 0 && queryParam !== "") {
         dispatch(setFilters(true))
         dispatch(filter(queryParam))
      }
   }

   const handleFeatureChange = (e) => {
      const { id, checked } = e.target
      setOptionFeature((prev) => ({ ...prev, [id]: checked }))
   }

   const handleScreenChange = (e) => {
      const { checked, id } = e.target
      setOptionScreen((prev) => ({ ...prev, [id]: checked }))
   }

   const handlePriceChange = (event, newValue) => {
      setPrice(newValue)
   }

   
   //* dispatch khi có sự thay đổi các dependencies: đồng bộ filter vs param url
   useEffect(() => {
      let urlPath = window.location.pathname.split("/")
      let param = decodeURI(window.location.search.substring(1))
      const queryObj = queryString.parse(window.location.search)
      if (urlPath.length > 2) {
         setQuery(`type=${urlPath.pop()}&${param}`)
         setCurActive(window.location.pathname.split('/')[2])
      } else {
         setQuery("")
         // đồng bộ danh mục hãng điện thoại
         setCurActive("")
      }
   
      // đồng bộ giá
      if(queryObj.discount_price_gte)
         setPrice([Number.parseInt(queryObj.discount_price_gte), Number.parseInt(queryObj.discount_price_lte)])

      // đồng bộ option màn hình
      const screen = queryObj.screen
      if (screen){
         if (Array.isArray(screen)){
            for(let i = 0; i < screen.length; i++)
               setOptionScreen((prev) => ({ ...prev, [`${screen[i]}`]: true }))
         }
         else{
            setOptionScreen((prev) => ({ ...prev, [`${screen}`]: true }))
         }
      }

      // đồng bộ option tínhh năng
      const feature = queryObj.feature
      if (feature){
         if (Array.isArray(feature)){
            for(let i = 0; i < feature.length; i++)
            setOptionFeature((prev) => ({ ...prev, [`${feature[i]}`]: true }))
         }
         else{
            setOptionFeature((prev) => ({ ...prev, [`${feature}`]: true }))
         }
      }

      if (products.length > 0 && query !== "") {
         dispatch(submitFilter(listTag()))
         dispatch(setFilters(true))
         dispatch(filter(query))
      }
      
   }, [products, dispatch, isFilter])

   let category = {}
   if (pathname.includes("Mobile")) {
      category = (
         <CategoryCard
            title="Điện thoại"
            listCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "LG", "Khác"]}
            subCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "Lg", "Other_phone"]}
            handleClickType={handleSelectType}
            curActive={curActive}
         />
      )
   } else if (pathname.includes("Laptop")) {
      category = (
         <CategoryCard
            title="Laptop"
            listCategory={["Macbook", "Dell", "Lenovo", "Asus", "Khác"]}
            subCategory={["Macbook", "Dell", "Lenovo", "Asus", "other_laptop"]}
            handleClickType={handleSelectType}
            curActive={curActive}
         />
      )
   } else {
      category = (
         <CategoryCard
            title="Phụ kiện"
            listCategory={["Pin dự phòng", "Tai nghe", "Củ sạc, cáp sạc", "Loa Bluetooth", "Khác"]}
            subCategory={["pin-du-phong", "tai-nghe", "cap-sac", "loa-bluetooth", "other_accesory"]}
            handleClickType={handleSelectType}
            curActive={curActive}
         />
      )
   }

   return (
      <div className="sf_container" style={{ marginTop: "5rem" }}>
         <div className="sf_sidebar_category">
            <h4 className="sf_category_title">Danh mục</h4>
         </div>
         {category}
         <div>
            <div className="sf_filter_price">
               <h4 className="sf_filter_title">Lọc theo giá</h4>
            </div>
            <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
               <Slider
                  className="slider_mui"
                  getAriaLabel={() => "Temperature range"}
                  value={price}
                  onChange={handlePriceChange}
                  valueLabelDisplay="off"
                  size="medium"
                  min={0}
                  max={50000000}
                  step={100000}
               />
            </div>
            <div className="sf_filter_value" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>{`Từ ${formatVND(
               price[0]
            )}- ${formatVND(price[1])}`}</div>

            <FilterCard
               title="Tính năng đặc biệt"
               options={[
                  { id: "Tất cả", label: "Tất cả" },
                  { id: "Bảo mật vân tay", label: "Bảo mật vân tay" },
                  { id: "Nhận diện khuôn mặt", label: "Nhận diện khuôn mặt" },
                  { id: "Sạc nhanh", label: "Sạc nhanh" },
                  { id: "Chống nước chống bụi", label: "Chống nước chống bụi" },
               ]}
               handleChange={handleFeatureChange}
               optionCheck={optionFeature}
            />

            <FilterCard
               title="Màn hình"
               options={[
                  { id: "Tất cả", label: "Tất cả" },
                  { id: "Màn hình nhỏ", label: "Màn hình nhỏ" },
                  { id: "Màn hình trung bình", label: "Màn hình trung bình" },
                  { id: "Màn hình lớn", label: "Màn hình rộng" },
                  { id: "Màn hình gập", label: "Màn hình gập" },
               ]}
               handleChange={handleScreenChange}
               optionCheck={optionScreen}
            />
            <button className="btn1" onClick={handleSubmitFilter}>
               Lọc danh sách
            </button>
         </div>
      </div>
   )
}

export default ShopFilter

import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import "./../../css/ShopStyle/ShopFilter.css"
import CategoryCard from "./CategoryCard"
import FilterCard from "./FilterCard"
import Slider from "@mui/material/Slider"
import "./../../css/ShopStyle/components.css"
import axiosClient from "../../api/axiosClient"
import { applyFilter } from "./../../redux/action/shopAction"
import { useNavigate } from "react-router-dom"
import queryString from "query-string"

const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num)
}

function ShopFilter({ pathname, handleLoading, cate, handleSetTag }) {
   let navigate = useNavigate()
   const dispatch = useDispatch()

   /*
    * ------------------------  HOOK ------------------------------ */
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

   const handleSelectType = (e) => {
      let x = e.target.innerHTML
      setType(x)
      console.log(e.target.innerHTML)
      setQuery(`type=${x}&`)
   }

   const arrPrams = query.split("&")
   let listTags = []
   let urlPath = window.location.pathname.split("/")
   if (urlPath.length > 2) {
      listTags.push(urlPath.pop())
   }
   // console.log(arrPrams)
   if (arrPrams.length > 2) {
      let i = 0
      for (i = 0; i < arrPrams.length; i++) if (arrPrams[i].includes("price")) break
      listTags.push("Giá từ " + arrPrams[i].split("=")[1] + " đến " + arrPrams[i+= 1].split("=")[1])
      i++;
      for (i; i < arrPrams.length; i++) {
         listTags.push(decodeURI(arrPrams[i].split("=")[1]))
      }
      // console.log(listTags)
   }
   const [type, setType] = useState("")

   /*
    *------------------------ HANDLE STATE CHANGE ----------------- */

   const applyFilter1 = (query) => {
      return (dispatch) => {
         axiosClient.get(`/categories/${cate}/products?${query}`).then((res) => {
            dispatch(applyFilter(res.data))
            handleLoading(false)
            handleSetTag(listTags)
         })
      }
   }

   const handleSubmitFilter = () => {
      let queryParam = ""
      if (price[0]) queryParam += `discount_price_gte=${price[0]}&discount_price_lte=${price[1]}`
      delete optionScreen.undefined

      for (const [key, value] of Object.entries(optionScreen)) {
         if (value) {
            queryParam += `&screen=${key}`
         }
      }
      queryParam = queryParam[0] === "&" ? queryParam.substring(1) : queryParam

      navigate(`?${queryParam}`)
      setQuery(queryParam)
      dispatch(applyFilter1(queryParam))
      window.location.reload()
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
   /*
    *--------------------------- DISPATCH TO PUSH FILTERED PRODUCTS TO STORE ----------------------- */
   //* dispatch cho lần render đầu tiên
   useEffect((e) => {
      let paramsList = queryString.parse(window.location.search)
      let urlPath = window.location.pathname.split("/")

      if (urlPath.length > 2) {
         setType(urlPath.pop())
      }
      console.log(type)
      if (paramsList["discount_price_gte"])
         handlePriceChange(e, [
            Number.parseInt(paramsList["discount_price_gte"]),
            Number.parseInt(paramsList["discount_price_lte"]),
         ])
      let screenList = paramsList["screen"]
      if (!Array.isArray(screenList)) {
         screenList = [screenList]
      }
      if (screenList.length > 0) {
         screenList.forEach((item) => {
            if (item) {
               // console.log(item)
               setOptionScreen((prev) => ({ ...prev, [item]: true }))
            }
         })
      }
      handleSetTag(listTags)
      // console.log("hihi")
   }, [])

   //* dispatch khi có sự thay đổi các dependencies
   useEffect(() => {
      let urlPath = window.location.pathname.split("/")
      let param = decodeURI(window.location.search.substring(1))
      if (urlPath.length > 2) {
         setQuery(`type=${urlPath.pop()}&${param}`)
         // console.log("oke")
      }
      dispatch(applyFilter1(query))
   }, [query, cate, optionScreen, optionFeature])

   let category = {}
   if (pathname.includes("Mobile")) {
      category = (
         <CategoryCard
            title="Điện thoại"
            listCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "LG", "Khác"]}
            category="Mobile"
            subCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "Lg", "Other_phone"]}
            isOpen={true}
            handleClickType={handleSelectType}
         />
      )
   } else if (pathname.includes("Laptop")) {
      category = (
         <CategoryCard
            title="Laptop"
            listCategory={["Macbook", "Dell", "Lenovo", "Asus", "Khác"]}
            isOpen={true}
            category="Laptop"
            subCategory={["Macbook", "Dell", "Lenovo", "Asus", "other_laptop"]}
            handleClickType={handleSelectType}
         />
      )
   } else {
      category = (
         <CategoryCard
            title="Phụ kiện"
            listCategory={["Pin dự phòng", "Tai nghe", "Củ sạc, cáp sạc", "Loa Bluetooth", "Khác"]}
            isOpen={true}
            category="Accessory"
            subCategory={["pin-du-phong", "tai-nghe", "cap-sac", "loa-bluetooth", "other_accesory"]}
            handleClickType={handleSelectType}
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
                  { id: "allFeatrues", label: "Tất cả" },
                  { id: "finger", label: "Bảo mật vân tay" },
                  { id: "faceId", label: "Nhận diện khuôn mặt" },
                  { id: "quickCharge", label: "Sạc nhanh" },
                  { id: "waterProof", label: "Chống nước chống bụi" },
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

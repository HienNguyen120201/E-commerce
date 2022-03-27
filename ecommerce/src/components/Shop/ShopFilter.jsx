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
import queryString from "query-string"
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
         listTags.push(decodeURI(urlPath.pop()))
      }
      if (arrPrams.length > 2) {
         let i = 0
         for (i = 0; i < arrPrams.length; i++) if (arrPrams[i].includes("price")) break
         listTags.push(
            "Giá từ " +
               formatVND(Number.parseInt(arrPrams[i].split("=")[1])) +
               " đến " +
               formatVND(Number.parseInt(arrPrams[(i += 1)].split("=")[1]))
         )
         i++
         for (i; i < arrPrams.length; i++) {
            listTags.push(decodeURI(arrPrams[i].split("=")[1]))
         }
      }
      return listTags
   }
   const handleSelectType = (e) => {
      let x = e.target.innerHTML
      console.log(x)
      setQuery(`type=${x}&`)
      setCurActive("")
      dispatch(submitFilter([x]))
      if (isLoaded && x !== "") {
         dispatch(setFilters(true))
         dispatch(filter(`type=${x.toLowerCase()}`))
      }
      console.log("oke")
   }

   /*
    *------------------------ HANDLE STATE CHANGE ----------------- */

   const handleSubmitFilter = () => {
      console.log("close")
      let queryParam = ""

      queryParam += filteredTag.length !== 0 ? `type=${filteredTag[0]}&` : ""
      if (price[0]) queryParam += `discount_price_gte=${price[0]}&discount_price_lte=${price[1]}`

      for (const [key, value] of Object.entries(optionFeature)) {
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

   const handlePriceChange = (event, newValue) => {
      setPrice(newValue)
   }

   //* -------------------dispatch khi có sự thay đổi các dependencies: đồng bộ filter vs param url --------------
   useEffect(() => {
      let urlPath = window.location.pathname.split("/")
      let param = decodeURI(window.location.search.substring(1))
      const queryObj = queryString.parse(window.location.search)
      if (urlPath.length > 2) {
         const x = decodeURI(urlPath.pop())
         console.log(x)
         setQuery(`type=${x}&${param}`)
         setCurActive(window.location.pathname.split("/")[2])
      } else {
         setQuery("")
         // đồng bộ danh mục hãng điện thoại
         setCurActive("")
      }

      // đồng bộ giá
      if (queryObj.discount_price_gte)
         setPrice([Number.parseInt(queryObj.discount_price_gte), Number.parseInt(queryObj.discount_price_lte)])

      // đồng bộ option tínhh năng
      const feature = queryObj.feature
      if (feature) {
         if (Array.isArray(feature)) {
            for (let i = 0; i < feature.length; i++) setOptionFeature((prev) => ({ ...prev, [`${feature[i]}`]: true }))
         } else {
            setOptionFeature((prev) => ({ ...prev, [`${feature}`]: true }))
         }
      }

      if (!isFilter)
         setOptionFeature({
            allFeatrues: false,
            finger: false,
            faceId: false,
            quickCharge: false,
            waterProof: false,
         })

      if (products.length > 0 && query !== "") {
         dispatch(submitFilter(listTag()))
         dispatch(setFilters(true))
         dispatch(filter(query))
      }
   }, [products, dispatch, isFilter])

   let category = {}
   let title = ""
   if (pathname.includes("Mobile")) {
      title = "Danh mục điện thoại"
      category = (
         <CategoryCard
            listCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "LG", "Khác"]}
            subCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "Lg", "Other_phone"]}
            handleClickType={handleSelectType}
            curActive={curActive}
         />
      )
   } else if (pathname.includes("Laptop")) {
      title = "Danh mục Máy tính"
      category = (
         <CategoryCard
            listCategory={["Macbook", "Dell", "Lenovo", "Asus", "Khác"]}
            subCategory={["Macbook", "Dell", "Lenovo", "Asus", "other_laptop"]}
            handleClickType={handleSelectType}
            curActive={curActive}
         />
      )
   } else {
      title = "Danh mục phụ kiện"
      category = (
         <CategoryCard
            listCategory={["Pin dự phòng", "Tai nghe", "Củ sạc, cáp sạc", "Loa Bluetooth", "Khác"]}
            subCategory={["pin-du-phong", "Tai nghe", "cap-sac", "loa-bluetooth", "other_accesory"]}
            handleClickType={handleSelectType}
            curActive={curActive}
         />
      )
   }

   return (
      <div className="sf_container" style={{ marginTop: "3rem" }}>
         <div className="sf_sidebar_category">
            <h4 className="sf_category_title">{title}</h4>
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
            <button className="btn1" onClick={handleSubmitFilter}>
               Lọc danh sách
            </button>
         </div>
      </div>
   )
}

export default ShopFilter

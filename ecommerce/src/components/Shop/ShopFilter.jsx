import React, { useState } from "react"
import { useDispatch } from "react-redux"
import "./../../css/ShopStyle/ShopFilter.css"
import CategoryCard from "./CategoryCard"
import FilterCard from "./FilterCard"
import Slider from "@mui/material/Slider"
import './../../css/ShopStyle/components.css'
// import Button from './Button'

const formatVND = (num) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num)
}

function ShopFilter() {
  /*
   * ------------------------  HOOK ------------------------------ */
  const [price, setPrice] = useState([10000000, 20000000])
  const [feature, setFeature] = useState([])
  const [screen, setScreen] = useState([])
  const dispatch = useDispatch()

  /*
   *------------------------ HANDLE STATE CHANGE ----------------- */
  const handleSubmitFilter = () => {
    const data = {
      price: price,
      features: feature,
      screen: screen,
    }

    dispatch({
      type: "SUBMIT_FILTER",
      payload: data,
    })
  }

  const handleFeatureChange = (e) => {
    const { name, checked } = e.target
    if (checked) {
      setFeature((prev) => [...prev, name])
    } else {
      setFeature(feature.filter((e) => e !== name))
    }
  }

  const handleScreenChange = (e) => {
    const { name, checked } = e.target
    if (checked) {
      setScreen((prev) => [...prev, name])
    } else {
      setScreen(screen.filter((e) => e !== name))
    }
  }

  const handlePriceChange = (newValue) => {
    setPrice(newValue)
  }

  return (
    <div className="sf_container" style={{ marginTop: "5rem" }}>
      <div className="sf_sidebar_category">
        <h4 className="sf_category_title">Danh mục</h4>
      </div>

      <CategoryCard
        title="Điện thoại"
        listCategory={["Iphone", "Xiaomi", "Samsung", "Oppo", "LG", "Khác"]}
        category="Phone"
        subCategory={["iphone", "xiaomi", "samsung", "oppo", "lg", "other_phone"]}
      />
      <CategoryCard
        title="Laptop"
        listCategory={["Macbook", "Dell", "HP", "Asus", "Khác"]}
        isOpen={false}
        category="Laptop"
        subCategory={["macbook", "dell", "hp", "asus", "other_laptop"]}
      />
      <CategoryCard
        title="Phụ kiện"
        listCategory={["Pin dự phòng", "Tai nghe", "Củ sạc, cáp sạc", "Loa Bluetooth", "Khác"]}
        isOpen={false}
        category="Accessory"
        subCategory={[
          "bacup_charger",
          "headphone",
          "charger",
          "bluetooth_speaker",
          "other_accesory",
        ]}
      />

      <div>
        <div className="sf_filter_price">
          <h4 className="sf_filter_title">Lọc theo giá</h4>
        </div>
        <div style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
          {" "}
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
        <div
          className="sf_filter_value"
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
        >{`Từ ${formatVND(price[0])}- ${formatVND(price[1])}`}</div>

        <FilterCard
          title="Tính năng đặc biệt"
          options={[
            { id: "allFeatrues", label: "Tất cả" },
            { id: "finger", label: "Bảo mật vân tay" },
            { id: "faceId", label: "Nhận diện khuôn mặt" },
            { id: "quickCharge", label: "Sạc nhanh" },
            { id: "warerProof", label: "Chống nước chống bụi" },
          ]}
          handleChange={handleFeatureChange}
        />

        <FilterCard
          title="Màn hình"
          options={[
            { id: "allScreens", label: "Tất cả" },
            { id: "smallScreen", label: "Màn hình nhỏ (dưới 5 in)" },
            { id: "mediumScreen", label: "Màn hình trung bình (5 - 6 in)" },
            { id: "largeScreen", label: "Màn hình rộng (trên 6 in)" },
            { id: "foldScreen", label: "Màn hình gập" },
          ]}
          handleChange={handleScreenChange}
        />
        <button className="btn" onClick={handleSubmitFilter}>
          Lọc danh sách
        </button>
      </div>
    </div>
  )
}

export default ShopFilter

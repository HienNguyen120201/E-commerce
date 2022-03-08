import React, { useState } from "react";
import "./../assets/css/ShopFilter.css";
import CategoryCard from "./CategoryCard";
import FilterCard from "./FilterCard";
import Slider from "@mui/material/Slider";
import "./../index.css";
import Button from './Button'

const formatVND = (num) =>{
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
}

function ShopFilter() {
    const [value, setValue] = useState([10000000, 20000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="sf_container" style={{marginTop: "5rem"}}>
            <div className="sf_sidebar_category">
                <h4 className="sf_category_title">Danh mục</h4>
            </div>

            <CategoryCard
                title="Điện thoại"
                listCategory={["Iphone","Xiaomi", "Samsung","Oppo", "LG","Khác",]}
                isOpen={true}
            />
            <CategoryCard
                title="Laptop"
                listCategory={["Macbook", "Dell", "HP", "Asus", "Khác"]}
                isOpen={false}
            />
            <CategoryCard
                title="Phụ kiện"
                listCategory={["Pin dự phòng", "Tai nghe", "Củ sạc, cáp sạc", "Loa Bluetooth","Khác"]}
                isOpen={false}
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
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="off"
                        size="medium"
                        min={0}
                        max={50000000}
                        step={100000}
                    />
                </div>
                <div className="sf_filter_value" style={{paddingLeft: "2rem", paddingRight: "2rem"}}>{`Từ ${formatVND(value[0])}- ${formatVND(value[1])}`}</div>

                <FilterCard
                    title="Tính năng đặc biệt"
                    options={[
                        { id: "allFeatrues", label: "Tất cả" },
                        { id: "finger", label: "Bảo mật vân tay" },
                        { id: "faceId", label: "Nhận diện khuôn mặt" },
                        { id: "quickCharge", label: "Sạc nhanh" },
                        { id: "warerProof", label: "Chống nước chống bụi" },
                    ]}
                    idChecked={0}
                />

                <FilterCard
                    title="Màn hình"
                    options={[
                        { id: "allScreens", label: "Tất cả" },
                        { id: "smallScreen", label: "Màn hình nhỏ (dưới 5 inches)" },
                        { id: "mediumScreen", label: "Màn hình trung bình (từ 5 - 6 inches)" },
                        { id: "largeScreen", label: "Màn hình rộng (trên 6 inches)" },
                        { id: "foldScreen", label: "Màn hình gập" },
                    ]}
                    idChecked={0}
                />

                <Button 
                    text = "Lọc danh sách"
                />
            </div>
        </div>
    );
}

export default ShopFilter;

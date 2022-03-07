import React from "react";
import "./../assets/css/ShopFilter.css";
import CategoryCard from "./CategoryCard";
function ShopFilter() {
    return (
        <div className="sf_container">
            <div className="sf_sidebar_category">
                <h4 className="sf_category_title">Danh mục</h4>
            </div>

            <CategoryCard
                title="Điện thoại"
                listCategory={[
                    "Iphone",
                    "Xiaomi",
                    "Samsung",
                    "Oppo",
                    "LG",
                    "Khác",
                ]}
                isOpen={true}
            />
            <CategoryCard
                title="Laptop"
                listCategory={[
                    "Macbook",
                    "Dell",
                    "HP",
                    "Asus",
                    "Khác",
                ]}
                isOpen={false}
            />
            <CategoryCard
                title="Phụ kiện"
                listCategory={[
                    "Pin dự phòng",
                    "Tai nghe",
                    "Củ sạc, cáp sạc",
                    "Loa Bluetooth",
                    "Khác",
                ]}
                isOpen={false}
            />
        </div>
    );
}

export default ShopFilter;

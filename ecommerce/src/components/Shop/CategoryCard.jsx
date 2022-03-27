import React from "react"
import { NavLink } from "react-router-dom"
import "../../css/ShopStyle/CategoryCard.css"


function CategoryCard({listCategory, subCategory, handleClickType, curActive }) {
   let activeStyle = {
      textDecoration: "underline",
      color: "red",
   }
   return (
      <div className="category-container">
         <ul>
            {listCategory.map((item, index) => {
               const currSelect = item === curActive ? "activeStyle" : undefined

               return (
                  <li key={index}>
                     <NavLink
                        to={`${subCategory[index]}`}
                        onClick={handleClickType}
                        style={({ isActive }) => (isActive || currSelect ? activeStyle : undefined)}
                     >
                        {item}
                     </NavLink>
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default CategoryCard

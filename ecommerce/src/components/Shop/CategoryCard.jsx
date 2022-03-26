import React from "react"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { NavLink } from "react-router-dom"
import "../../css/ShopStyle/CategoryCard.css"
import { useState } from "react"
import Collapse from "@mui/material/Collapse"

function CategoryCard({ title, listCategory, subCategory, handleClickType, curActive }) {
   const [open, setOpen] = useState(true)
   // console.log(curActive)
   const handleClick = () => {
      setOpen(!open)
   }

   let activeStyle = {
      textDecoration: "underline",
      color: "red",
   }
   return (
      <div className="category-container">
         <div className="category__heading">
            <h3>{title}</h3>
            <i onClick={handleClick}>{open ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}</i>
         </div>

         <div className="category__dropdown">
            <Collapse in={open} timeout="auto" unmountOnExit>
               <ul>
                  {listCategory.map((item, index) => {
                     const currSelect = item === curActive? "activeStyle": undefined
                   
                     return (
                        <li key={index}>
                           <NavLink
                              to={`${subCategory[index]}`}
                              onClick={handleClickType}
                              style={({ isActive}) => (isActive || currSelect ? activeStyle : undefined)}
                           >
                              {item}
                           </NavLink>
                        </li>
                     )
                  })}
               </ul>
            </Collapse>
         </div>
      </div>
   )
}

export default CategoryCard

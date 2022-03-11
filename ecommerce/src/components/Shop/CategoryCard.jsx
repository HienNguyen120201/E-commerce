import React from "react"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Link } from "react-router-dom"
import "../../css/ShopStyle/CategoryCard.css"
import { useState } from "react"
import Collapse from "@mui/material/Collapse"

function CategoryCard({ title, listCategory, isOpen, category, subCategory }) {
  const [open, setOpen] = useState(isOpen)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="category-container">
      <div className="category__heading">
        <Link to={`${category}`}>
          <h3>{title}</h3>
        </Link>
        <i onClick={handleClick}>
          {open ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}
        </i>
      </div>

      <div className="category__dropdown">
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ul>
            {listCategory.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`${category}/${subCategory[index]}`}>{item}</Link>
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

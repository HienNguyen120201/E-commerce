import React from 'react'
import  './../assets/css/Button.css'

function Button({text}) {
  return (
    <button className="btn">{text}</button>
  )
}

export default Button
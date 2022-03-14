import React from "react"
import './../../css/ShopStyle/Loading.css'

function Loading() {
   return (
      <div style = {style}>
         <div class="loader">
            <div class="outer"></div>
            <div class="middle"></div>
            <div class="inner"></div>
         </div>
      </div>
   )
}
const style = {
    marginTop: "10rem",
    paddingBottom: "10rem"
}
export default Loading

import React from "react"
import Header from "./Header"
import { BrowserRouter, Route } from "react-router-dom"
import Router from "../routes/Router"
import Footer from "./Footer"
const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <Router />
            {/* <Shop /> */}
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Layout

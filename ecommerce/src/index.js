import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

import "./css/Home.css"
import Layout from "./components/Layout"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

/* -------------------  Redux -------------------------------*/
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./redux/reducer/rootReducer.jsx"
import { composeWithDevTools } from "redux-devtools-extension"
/* ---------------------------------------------------------*/

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

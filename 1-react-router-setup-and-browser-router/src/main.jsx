import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App.jsx"
import "./index.css"

// example.com/ => App
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
)

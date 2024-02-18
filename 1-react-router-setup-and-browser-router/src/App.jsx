import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./views/Home"

export default function App() {
   return (
      <BrowserRouter>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
         </nav>
         <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/about" element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
}

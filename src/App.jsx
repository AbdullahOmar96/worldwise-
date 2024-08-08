// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import HomePage from "./Pages/HomePage";
import PAgeNotFound from "./Pages/PAgeNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="app" element={<AppLayout/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="*" element={<PAgeNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

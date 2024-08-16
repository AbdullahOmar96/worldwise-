/* eslint-disable no-unused-vars */
// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import HomePage from "./Pages/HomePage";
import PAgeNotFound from "./Pages/PAgeNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";


import CityList from "./components/CityList";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (error) {
        alert("Error fetching cities. Please try again later.");
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="Login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities = {cities} isLoading = {isLoading}/>} />
            <Route path="cities" element={<CityList cities = {cities} isLoading = {isLoading} />} />
            <Route path="countries" element={<p>countries</p>} />
            
            <Route path="form" element={<p>form</p>} />
          </Route>
          <Route path="*" element={<PAgeNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

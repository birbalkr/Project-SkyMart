import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/details/:id" element={<ProductDetails/>} />
        </Routes>
    )
}

export default AppRoutes

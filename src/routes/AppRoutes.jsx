import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
    )
}

export default AppRoutes

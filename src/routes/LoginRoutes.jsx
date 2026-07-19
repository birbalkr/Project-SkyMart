import React from 'react'
import { Routes, Route } from "react-router";
import Signin from '../components/Signin';
import Create from '../components/Create';

function LoginRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/create" element={<Create />} />
        </Routes>
    )
}

export default LoginRoutes

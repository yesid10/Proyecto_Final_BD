import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Layout/Navbar'
import Home from '../Components/Home/Home'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
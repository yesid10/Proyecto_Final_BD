import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Layout/Navbar'
import Home from '../Components/Home/Home'
import Products from '../Components/products/Products'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/products' element={<Products/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
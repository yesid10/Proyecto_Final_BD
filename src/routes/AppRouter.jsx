import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Products from '../Components/products/Products'
import LayoutComponent from '../Components/Layout/LayoutComponent'
import { ThemeProvider } from '@material-tailwind/react'

const AppRouter = () => {
    return (
        <BrowserRouter future={{v7_relativeSplatPath: true}}>
            <Routes>
                <Route element={<LayoutComponent />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter
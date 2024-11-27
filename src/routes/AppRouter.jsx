import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Products from '../Components/products/Products'
import LayoutComponent from '../Components/Layout/LayoutComponent'
import { ThemeProvider } from '@material-tailwind/react'
import DetailProduct from '../Components/products/detailsProducts/DetailProduct'
import DetailCart from '../Components/cart/detailCart/DetailCart'

const AppRouter = () => {
    return (
        <BrowserRouter future={{v7_relativeSplatPath: true}}>
            <Routes>
                <Route element={<LayoutComponent />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/productos' element={<Products />} />
                    <Route path='/detalles-producto/:producto' element={<DetailProduct/>}/>
                    <Route path='/detail-cart' element={<DetailCart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter
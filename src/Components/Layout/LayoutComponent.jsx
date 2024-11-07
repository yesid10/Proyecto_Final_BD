import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const LayoutComponent = () => {
  return (
    <>
    <Navbar/>
   <Outlet/>
    </>
  )
}

export default LayoutComponent
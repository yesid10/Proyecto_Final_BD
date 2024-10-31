import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();

  const navigation = [
    { id: 1, name: 'Productos', href: 'products', current: true },
    { id: 2, name: 'Team', href: '#', current: false },
    { id: 3, name: 'Projects', href: '#', current: false },
    { id: 4, name: 'Calendar', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleClickNavigation = (page, idPage) => {
    console.log("click desde navbar")
    const idPageCurrent = navigation.find(id => id.id === idPage);
    console.log('id pagina actual', idPageCurrent.id);

    if (idPage === idPageCurrent.id) {
      setIsOpen(true);
      navigate(page)
    }

  }

  return (
    <div>
      <div className='bg-primary_color justify-around items-center py-1 sm:flex hidden'>
        <div>
          <span className='text-white  text-sm text-ellipsis'>Haga sus pedidos en linea o llámanos:
            <a href="tel:+573118599554" className="font-semibold ml-2 underline">
              (+57) 311 859 9554
            </a>
          </span>
        </div>
        <div className='text-white font-bold flex gap-6 items-center'>
          <FaFacebookF className='cursor-pointer' />
          <FaXTwitter className='cursor-pointer' />
          <FaInstagram className='cursor-pointer' />
          <FaGithub className='cursor-pointer' />
          <FaLinkedin className='cursor-pointer' />
        </div>
      </div>

      <div className='flex justify-around items-center my-7'>
        <div class="flex sm:hidden items-center justify-center">
          <div class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
            <div class="space-y-2">
              <span class="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span class="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
            </div>
          </div>
        </div>
        <figure>
          <img src="https://digital-world-4.myshopify.com/cdn/shop/files/logo_digital_new_250x.png?v=1613156859" alt="" />
        </figure>
        <div className='sm:flex hidden items-center '>
          <select className='border-2 rounded-sm py-2' name="" id="">
            <option value="">Todo</option>
            <option value="">PC</option>
            <option value="">Celulares</option>
            <option value="">PC</option>
            <option value="">Celulares</option>
            <option value="">PC</option>
            <option value="">Celulares</option>
            <option value="">PC</option>
            <option value="">Celulares</option>
            <option value="">PC</option>

          </select>
          <div className='flex '>
            <input className='border-2 py-2 pr-10' type="text" placeholder='Buscar colección' />
            <button className='flex px-3 items-center justify-center bg-primary_color'><FaSearch /></button>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <GoHeart className='text-3xl sm:flex hidden ' />
          <FaUserAlt className='text-2xl sm:flex hidden' />
          <div className=' gap-1 items-center justify-center'>
            <CiShoppingCart className='text-3xl ' />
            <span className='sm:flex hidden '>$0.00 COP</span>
          </div>
        </div>
      </div>


      <Outlet />
    </div>
  )
}

export default Navbar
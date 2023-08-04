import React from 'react'
import Logo from '../assets/LOGO.png'
import { BsBasket } from "react-icons/bs";
import SearchBtn from './SearchBtn';

function Header() {
  return (
    <div className="flex w-full h-[90px]">
        <div className='flex w-full h-[90px] items-center justify-center bg-white fixed border-b-2 border-gray-500 z-10'>
            <div className="w-[1000px] flex justify-between">
                <a href="">
                    <img src={Logo} alt="" className='w-[91px] h-[74px]' />
                </a>
                {/* List content */}
                <div className="flex items-center text-[14px] w-[806px] justify-between">
                    <ul className='flex items-center w-[194px] justify-between'>
                        <li><a href=""className='hover:border-b-2 border-b border-gray-500'>All Merchandise</a></li>
                        <li><a href=""className='hover:border-b border-gray-500'>Contact</a></li>
                    </ul>
                    {/* Font-Awsome */}
                    <div className="w-[30vw] flex justify-end">
                        <ul className='flex w-[65px] justify-between items-center text-[20px]'>
                            <li><a className=''><SearchBtn /></a></li>
                            <li className='hover:scale-125'><a href='/basket' className=''><BsBasket /></a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center'>
        <span className='flex justify-center items-center h-[120px] w-full border-y-2 border-gray-500'>
            <ul className='flex h-full w-[90px] justify-between items-center text-[20px]'>
                <li><a href="" ><FaSquareFacebook  className='hover:scale-125' /></a></li>
                <li><a href="" ><GrInstagram  className='hover:scale-125' /></a></li>
                <li><a href="" ><VscGithub  className='hover:scale-125' /></a></li>
            </ul>
        </span>

        <span className='flex justify-between items-center h-[50px] w-[200px] text-[.6rem]'>
            <a href="" className='hover:text-black hover:border-b border-black text-gray-500'>Security</a>
            <a href="" className='hover:text-black hover:border-b border-black text-gray-500'>contact</a>
            <a href="" className='hover:text-black hover:border-b border-black text-gray-500'>Help</a>
        </span>
    </div>
  )
}

export default Footer
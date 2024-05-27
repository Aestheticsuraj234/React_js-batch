import React from 'react'
import { IoHome } from "react-icons/io5";
import { SIDEBARLINKS } from '../Constants/SidebarLink';
import { LuLogOut } from 'react-icons/lu';

const LeftSidebar = () => {
return (
<nav className='hidden md:flex  bg-black px-4 py-10 flex-col justify-between border-r  min-w-[250px]'>

<div className='flex flex-col gap-11'>
    {/* logo */}
    <div className='flex gap-3'>
        <img src="https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png" alt="logo" width={100} height={60} />
    </div>

    {/* links */}

    <ul className="flex flex-col gap-5">


        {
            SIDEBARLINKS.map((link, index) => (
                <li key={index} className='rounded-lg text-[16px] font-medium leading-[140%] hover:bg-[#1c1e21] transition text-white'>
                    <div className='flex gap-4 items-center px-4 py-2'>
                        {link.icon}
                        <span className='text-lg'>{link.title}</span>
                    </div>
                </li>
            ))
        }

    </ul>

    <button className="bg-white  text-gray-500  flex px-4 py-2 rounded-md  justify-center items-center  gap-2">
        <LuLogOut className='h-4 w-4 text-red-700' />
        <span className='text-sm text-red-600 font-bold'>Logout</span>
    </button>

</div>
</nav>
)
}

export default LeftSidebar
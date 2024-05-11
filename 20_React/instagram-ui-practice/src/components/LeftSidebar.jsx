import React from 'react'
import Logo from "./Logo"
import Navlinks from "./Navlinks"
import { LuLogOut } from 'react-icons/lu';

const LeftSidebar = () => {
    return (
        <nav className='flex  bg-black px-4 py-10 flex-col justify-between border-r  min-w-[250px]'>

            <div className='flex flex-col gap-11'>
                {/* logo */}
                <Logo />

                {/* links */}

                <Navlinks />

                <button className="bg-white  text-gray-500  flex px-4 py-2 rounded-md  justify-center items-center  gap-2">
                    <LuLogOut className='h-4 w-4 text-red-700' />
                    <span className='text-sm text-red-600 font-bold'>Logout</span>
                </button>

            </div>
        </nav>
    )
}

export default LeftSidebar
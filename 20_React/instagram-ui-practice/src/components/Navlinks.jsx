import React from 'react'
import { IoHome } from 'react-icons/io5'
import { NAV_LINKS_DATA } from '../constant/NavLinkData'

const Navlinks = () => {
    return (
        <ul className="flex flex-col gap-5">

            {
                NAV_LINKS_DATA.map((navlink, index) => (
                    <li className='rounded-lg cursor-pointer text-[16px] font-medium leading-[140%] hover:bg-[#1c1e21] transition text-white'>

                        <div className='flex gap-4 items-center px-4 py-2'>
                           {navlink.icon}
                            <span className='text-lg'>{navlink.Name}</span>
                        </div>
                    </li>
                ))
            }




        </ul>
    )
}

export default Navlinks


{/* <ul className="flex flex-col gap-5">

<li className='rounded-lg text-[16px] font-medium leading-[140%] hover:bg-[#1c1e21] transition text-white'>

    <div className='flex gap-4 items-center px-4 py-2'>
        <IoHome size={30} />
        <span className='text-lg'>Home</span>

    </div>
</li>

</ul> */}
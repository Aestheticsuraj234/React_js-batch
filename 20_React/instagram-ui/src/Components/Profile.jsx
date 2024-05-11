import React from 'react'

const Profile = ({ fullname, username }) => {
    return (
        <div className='flex flex-row justify-between items-center gap-4'>

            {/* div-left */}
            <div className='flex flex-row justify-center items-center gap-3'>
                <img
                    src="https://avatar.iran.liara.run/public/20"
                    alt="profile"
                    className='h-12 w-12 rounded-full'
                />

                <div className='relative flex flex-col items-start justify-center'>
                    <span className='text-white font-bold'>{fullname}</span>
                    <span className='text-gray-500'>@{username}</span>
                </div>



            </div>
            {/* div-right */}

            <button className='bg-[#1c1e21] text-white px-4 py-2 rounded-md'>Switch Account</button>

        </div>
    )
}

export default Profile
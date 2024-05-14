import React from 'react'

const Profile = ({ fullname, username }) => {
    return (
        <div className="flex flex-row justify-center items-center gap-5 m-3">

            <div className="flex flex-row justify-center items-center gap-2 ">
                <img src="https://avatar.iran.liara.run/public/20" height={40} width={40} alt='User Profile' />

                <div className='flex flex-col justify-start items-start'>
                    <p className='text-white font-bold'>{fullname}</p>
                    <span className='text-gray-400 text-sm'>@{username}</span>
                </div>

            </div>

            {/* r.h.s */}

            <button className="px-3 py-1.5 bg-gray-800 rounded-md text-white shadow-md">
                Switch Account
            </button>

        </div>
    )
}

export default Profile
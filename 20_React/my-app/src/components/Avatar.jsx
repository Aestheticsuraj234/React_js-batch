import React from 'react'

const Avatar = ({ url,username }) => {
    return (
        <div className='flex flex-col items-center gap-1'>
            <div className="border-4 rounded-full border-green-500">
                <img
                    src={url}
                    alt='avatar'
                    className='w-36 h-36 rounded-full object-contain'
                />
            </div>
            <h2 className='text-2xl  text-center font-semibold'>{username}</h2>
        </div>
    )
}

export default Avatar
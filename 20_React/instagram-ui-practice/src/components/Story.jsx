import React from 'react'

const Story = ({ avatar, username }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 cursor-pointer  '>
            <img src={avatar} alt="user profie" className='h-18 w-18 rounded-full p-1   object-contain border-red-500 border-2 hover:scale-110  transition-all transom ease-in-out ' />
            <p className="text-xs w-14 truncate text-white text-center">{username}</p>
        </div>
    )
}

export default Story
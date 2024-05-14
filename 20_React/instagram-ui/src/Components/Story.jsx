import React from 'react'

const Story = ({username , avatar ,isWatched}) => {

  
  return (
    <div className=''>
        <img className={`h-18 w-18 rounded-full object-contain  cursor-pointer  p-[1.5px] 
        ${isWatched ? "border-gray-400" : "border-red-500" }   border-2 hover:scale-110 transition-all transform ease-in-out`} src={avatar} alt=''  />
        <p className='text-xs w-14 truncate text-white text-center'>{username}</p>
    </div>
  )
}

export default Story
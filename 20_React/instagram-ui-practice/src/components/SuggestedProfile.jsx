import React from 'react'

const SuggestedProfile = ({avatar , username , type}) => {
  return (
    <div className="flex flex-row justify-between items-center gap-5 m-3">

            <div className="flex flex-row justify-center items-center gap-2 ">
                <img src={avatar} height={40} width={40} alt='User Profile' />

                <div className='flex flex-col justify-start items-start'>
                    <p className='text-white font-bold'>{username}</p>
                    <span className='text-gray-400 text-sm'>{type}</span>
                </div>

            </div>

            {/* r.h.s */}

            <button className="px-3 py-1.5 bg-blue-500 rounded-md text-white shadow-md">
                Follow
            </button>

        </div>
  )
}

export default SuggestedProfile
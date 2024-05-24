import React from 'react'
import H2 from './H2'

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
            <H2 username={username} />
        </div>
    )
}

export default Avatar
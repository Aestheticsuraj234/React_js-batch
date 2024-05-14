import React from 'react'
import { BiComment, BiHeart, BiShare } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { CiBookmark } from 'react-icons/ci'
import { LuBookMarked } from 'react-icons/lu'

const Post = ({ userAvatar, username, updatedAt, location, PostUrl, likesNumber }) => {
    return (
        <div className='max-w-[32rem] w-full text-white p-4  h-auto bg-transparent m-4  rounded-md  flex flex-col  '>
            {/* upper */}
            <div className="flex justify-between items-center ">
                {/* l.h.s */}
                <div className='flex flex-row justify-center items-center space-x-2 gap-1'>
                    <img
                        src={userAvatar}
                        className='h-8  rounded-full'
                        alt="profile"
                    />

                    <div className='flex flex-col items-center gap-1'>

                        <div className='flex items-center justify-center space-x-2 gap-2'>
                            <p className='font-semibold text-sm text-white'>{username}</p>
                            •
                            <p className='font-medium text-xs text-gray-500'>
                                {updatedAt}
                            </p>
                        </div>

                    </div>


                </div>
                {/* r.h.s */}
                <BsThreeDots className='text-white cursor-pointer' />

            </div>
            {/* main post */}
            <img
                src={PostUrl}
                className='h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover mb-5 mt-5'
            />
            {/* lower */}
            <div className='flex flex-row justify-between items-center'>

                <div className='flex flex-row justify-center items-center gap-4'>
                    <BiHeart size={24} />
                    <BiComment size={24} />
                    <BiShare size={24} />
                </div>

                <CiBookmark size={24} />

            </div>
        </div>
    )
}

export default Post
import React from 'react';

const FollwersCardList = ({
    loginName,
    avatar,
    follwers,
    following,
    repoUrl
}) => {
    return (
        <div className="flex px-4 py-2 flex-col shadow-md items-start justify-between bg-gray-800 h-[10rem] w-[20rem]  rounded-md ">
            {/* upper */}
            <div className="flex flex-row justify-start items-center gap-2">
                <div className="border-4 rounded-full border-green-500">
                    <img
                        src={avatar}
                        alt='avatar'
                        className='w-14 h-14 rounded-full object-contain'
                    />
                </div>

                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-base font-bold text-white">{loginName}</h1>
                    <div className="flex flex-row space-x-5">
                        <p className="text-sm font-semibold text-gray-400">Followers: <span className='text-yellow-500'>{follwers}</span></p>
                        <p className="text-sm font-semibold text-gray-400">Following: <span className='text-yellow-500'>{following}</span></p>
                    </div>

                </div>


            </div>


            {/* lower button */}
            <button className='self-center mb-3'>
                <a
                    href={repoUrl}
                    className="bg-green-500 px-5 py-2.5 rounded-md text-white font-semibold text-base"
                >
                    View Profile
                </a>
            </button>
        </div>
    )
}

export default FollwersCardList
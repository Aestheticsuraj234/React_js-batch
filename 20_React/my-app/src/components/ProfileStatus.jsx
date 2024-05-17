import React from 'react'

const ProfileStatus = ({ follwers, following }) => {
    return (
        <div className="bg-gray-800   px-4 py-2 flex justify-between gap-5 items-center rounded-md  ">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-3xl font-bold text-yellow-500">{follwers}</h1>
                <p className="text-lg font-semibold">Followers</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-3xl font-bold text-yellow-500">{following}</h1>
                <p className="text-lg font-semibold">Following</p>
            </div>

        </div>
    )
}

export default ProfileStatus
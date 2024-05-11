import React from 'react'
import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'

const RightSidebar = () => {
  return (
    <aside className="hidden md:flex  bg-black px-4 py-10 flex-col justify-between border-l  min-w-[270px]">
      <div className='flex flex-col gap-11'>
        {/* account */}
        <Profile fullname={"Sigma Developer"} username={"sigma_developer_"} />

        {/* suggested user */}

        <div className='flex flex-col gap-4'>
          <div className='flex flex-row justify-between items-center'>
            <span className='text-white font-bold'>Suggested Accounts</span>
            <span className='text-blue-500 font-bold'>See All</span>
          </div>

          <SuggestedProfile
          FullName={"John Doe"}
          type={"Suggested"}
          ProfilePic={"https://avatar.iran.liara.run/public/2"}
          />
          
          <SuggestedProfile
          FullName={"Suraj"}
          type={"Suggested"}
          ProfilePic={"https://avatar.iran.liara.run/public/1"}
          />

          
        </div>


      </div>
    </aside>
  )
}

export default RightSidebar
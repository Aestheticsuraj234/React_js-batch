import React from 'react'
import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'

const RightSidebar = () => {
  return (
    <aside className='flex  bg-black px-4 py-10 flex-col justify-between border-l  min-w-[290px]'>
      <div className="flex flex-col gap-7  ">

        {/* profile */}

        <Profile fullname={"Suraj Kumar"} username={"sigma_developer_"} />

        {/* suggested profile section */}

        <div className="flex flex-row justify-between items-center m-2">
          <h1 className="text-lg font-bold text-white">Suggested Accounts</h1>
          <p className="text-base font-semibold text-blue-400">See All</p>
        </div>

        {/* SuggetedProfile */}

        <SuggestedProfile
          avatar="https://avatar.iran.liara.run/public/2"
          username="John Doe"
          type="Follow You"
        />

        <SuggestedProfile
          avatar="https://avatar.iran.liara.run/public/3"
          username="Suraj Kumar"
          type="Suggested For You"
        />

        <SuggestedProfile
          avatar="https://avatar.iran.liara.run/public/4"
          username="John Doe"
          type="Follow You"
        />

      </div>

    </aside>
  )

}

export default RightSidebar
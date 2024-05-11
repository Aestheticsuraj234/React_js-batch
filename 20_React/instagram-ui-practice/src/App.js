import React from 'react'
import LeftSidebar from './components/LeftSidebar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <main className="flex h-screen bg-black text-white">
        <div className="w-full flex">
          <LeftSidebar/>


    {/* feed */}
    <div className='flex flex-1 h-full'>
          <Feed />
        </div>

    {/* RightSidebar */}

    <RightSidebar/>


        </div>
    </main>
  )
}

export default App
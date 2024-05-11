import React from 'react'
import LeftSidebar from './Components/LeftSidebar'
import Feed from './Components/Feed'
import RightSidebar from './Components/RightSidebar'

const App = () => {
  return (
    <main className="flex h-screen bg-black">

      <div className='w-full md:flex'>
        <LeftSidebar />


        <div className='flex flex-1 h-full'>
          <Feed />
        </div>
        {/* right sidebar */}
        <RightSidebar />
      </div>



    </main>
  )
}

export default App
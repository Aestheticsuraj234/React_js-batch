import React from 'react'
import Profile from './components/Profile'
import  { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='bg-[#212121]  text-white  h-auto flex flex-col justify-start items-center px-4 py-5 '>
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent  bg-gradient-to-r from-indigo-300 to-purple-400">Github Profile Checker</h1>
      <Profile/>
      <Toaster/>
    </div>  
  )
}

export default App
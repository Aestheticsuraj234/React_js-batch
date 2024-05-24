import React from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'
const H2 = ({username}) => {
  const {data} = useContext(GlobalContext)
  console.log("hello i am in h2",data)
  return (
    <h2 className='text-2xl  text-center font-semibold'>{username}</h2>
  )
}

export default H2
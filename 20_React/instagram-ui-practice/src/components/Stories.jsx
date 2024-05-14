import React from 'react'
import Story from './Story'
import { StoryDataUser } from '../constant/StoryUserData'

const Stories = () => {
  return  (
    <div className='flex  space-x-2  bg-black  mt-2  p-6' >
        {
            StoryDataUser.map((story)=>(
                <Story key={story.id}  username={story.username} avatar={story.avatar} />

            ))
        }
    </div>
  )
}

export default Stories
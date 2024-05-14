import React from 'react'
import Story from './Story'
import { StoryData } from '../Constants/StoryData'

const Stories = () => {
  return (
    <div className='flex space-x-2 p-6 bg-black  mt-8  border rounded-sm'>

    {
      StoryData.map((story)=>(
        <Story  key={story.id} avatar={story.avatar} username={story.username} isWatched={story.isWatched} />
      ))
    }

 

    </div>
  )
}

export default Stories
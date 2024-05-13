import React from 'react'
import Story from './Story'
import { StoryData } from '../Constants/StoryData'

const Stories = () => {
  return (
    <div className='flex space-x-2 p-6 bg-black  mt-8  border rounded-sm'>

      {StoryData.map((story) => (
        <Story key={story.id} username={story.username} avatar={story.avatar} />
      ))
    }

    </div>
  )
}

export default Stories
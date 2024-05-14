import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 space-y-4'>
      <Post
      userAvatar="https://avatar.iran.liara.run/public/4"
      username="sigma_developer"
      updatedAt="Now"
      PostUrl="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais"
      likesNumber=""
      location={""}
      />

    </div>
  )
}

export default Posts
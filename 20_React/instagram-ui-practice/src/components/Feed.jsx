import React from 'react'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className="flex flex-col items-center gap-10 m-4 overflow-x-scroll">
      <section>
        {/* stories */}
        <Stories/>
        {/* posts */}
      </section>

    </main>
  )
}

export default Feed
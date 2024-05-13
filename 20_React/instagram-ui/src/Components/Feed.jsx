import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

const Feed = () => {
  return (
    <main className="flex flex-col items-center gap-10 mx-4 my-2 overflow-x-scroll">
      <section >
        <Stories />
      <Posts />
      </section>
    </main>
  );
};

export default Feed;

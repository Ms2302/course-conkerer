import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#DB5CA2]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Course Curator
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          The one stop shop for your personal development
        </h2>
        <div>
         <a href='courses'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Enter App
          </button>
         </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

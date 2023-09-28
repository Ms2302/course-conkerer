import React from 'react';
//Simple home page 
const Home = () => {
  return (
    <div id='home' className='w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#3e4d6a]'>
          Course Curator
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#5f81b1]'>
          The one stop shop for your personal development
        </h2>
        <div>
         <a href='courses'>
          <button className='enter'>
            Enter App
          </button>
         </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

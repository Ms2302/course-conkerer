import React from 'react';
//Simple home page 
const Home = () => {
  return (
    <div id='home' className='w-full h-screen'>
      <div id='box'>
        <h1 className='text-6xl font-bold text-[#000000]'>
          Course Curator
        </h1>
        <h2 className='text-4xl font-bold mt-5 text-[#222831]'>
          The one stop shop for your personal development
        </h2>
        <div className='mt-6'>
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

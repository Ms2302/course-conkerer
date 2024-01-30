import React from 'react';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

//Simple home page 
const Home = () => {
    axios.get('http://localhost:8080/data')
    console.log("getting data")

  return (

    <div className='w-full'>
      <div id='box' className='bg' >
        <h1 className='text-6xl font-bold text-[#F2545B]'>
          Course Conkerer
        </h1>
        <h2 className='text-4xl font-bold mt-5 text-[#F2545B]'>
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

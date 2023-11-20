import React from 'react';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import background from "../data/tree.jpg"

//Simple home page 
const Home = () => {
  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/data')
  }))
  return (

    <div className='w-full'>
      <div id='box' className='bg' >
        <h1 className='text-6xl font-bold text-[#F2545B]'>
          Course Conkerer
        </h1>
        <h2 className='text-4xl font-bold mt-5 text-[#A93F55]'>
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

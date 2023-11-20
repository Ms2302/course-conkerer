import React, { useState } from "react";
import { useSelector } from 'react-redux';

import Review from "./reviewModal";
const Card = ({ item }) => {
  const user = useSelector((state) => state.auth.user)

    return(

    <div className="App">
    
    {
      
        item.map((course) =>
        {

            if (course.stars !== null){
              course.stars = course.stars.replace(/-?\d+(\.\d+)?/g, n => Number(n).toFixed(2))
                return(
                  
                    <div className="card" key={ course.id }>
                        <img className="Course_img" src={course.img} alt={course.title}></img>
                        <strong>{ course.title }</strong><br></br>
                        <p>Our Rating: {Math.round(course.rating * 100)/100} stars</p>
                        <span id="stars">Base Rating: {course.stars}</span><br></br>
                        <p>Time: { course.time }</p><br></br>
                        <p>{ course.Level } level</p><br></br>
                        
                      <div className="courseLink">
                        <span id="course_btn" class="btn btn-dark w-75">
                          <a href={course.URL} target="_blank" className="text-light">Go To Course</a> 
                      </span>
                      </div>
                      <div className="reviewLink">
                      {user ?
                        <span class="btn btn-dark">
                         <Review id={course.id} courseName={course.title}></Review>                       
                        </span>
                      : null}
                    </div>
                    </div>
                  )
            }
            else{
                    return(
                        <div className="card" key={ course.id }>
                            <img className="Course_img" src={course.img} alt={course.title}></img>
                            <strong>{ course.title }</strong><br></br>
                            <p>Our Rating: {Math.round(course.rating * 100)/100} stars</p>
                            <p>Time: { course.time }</p><br></br>
                            <p>{ course.Level } level</p><br></br>
                            
                          <div className="courseLink">
                          <span class="btn btn-dark  w-75">
                            <a href={course.URL} target="_blank" className="text-light">Go To Course</a> 
                          </span>

                        </div>
                        <div className="reviewLink">
                        {user ?
                          <span class="btn btn-dark">
                           <Review id={course.id} courseName={course.title}></Review>                       
                          </span>
                        : null}
                        </div>
                        </div>
                        
      

                        
                      ) 
            }
        })
    }
    </div>
    )
}




export default Card;
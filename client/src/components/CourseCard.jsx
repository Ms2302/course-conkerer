import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import getStars from "./stars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = ({ item }) => {

    return(

    <div className="App">
    
    {
      
        item.map((course) =>
        {

            if (course.stars !== null){
              course.stars = course.stars.replace(/-?\d+(\.\d+)?/g, n => Number(n).toFixed(2))
                return(
                  
                    <div className="card" key={ course.id }>
                        <img src={course.img} alt={course.title}></img>
                        <strong>{ course.title }</strong><br></br>
                        <span id="stars">{course.stars}</span><br></br>
                        <p>Time: { course.time }</p><br></br>
                        <p>{ course.Level } level</p><br></br>
                        
                      <div className="courseLink">
                        <span id="course_btn" class="btn btn-dark w-75">
                        <a href={course.URL} target="_blank" className="text-light">Go To Course</a> 
                      </span>
                      </div>
                    </div>
                  )
            }
            else{
                    return(
                        <div className="card" key={ course.id }>
                            <img src={course.img} alt={course.title}></img>
                            <strong>{ course.title }</strong><br></br>
                            <p>Time: { course.time }</p><br></br>
                            <p>{ course.Level } level</p><br></br>
                            
                          <div className="courseLink">
                          <span class="btn btn-dark  w-75">
                            <a href={course.URL} target="_blank" className="text-light">Go To Course</a> 
                          </span>
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
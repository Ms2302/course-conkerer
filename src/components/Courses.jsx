import React from 'react';
import Courses from '../data/CourseDetails.json';
import { Link } from "react-router-dom"

function courses() {
  return (
    <div name='work' className='App'>
    <div>
    <h1>Courses</h1>

          {
            Courses && Courses.map( course => {
              if (course.stars !== null){

              
              
              return(
                <div className="card" key={ course.id }>
                  <div className="background">
                    <strong>{ course.title }</strong><br></br>
                    <span id="stars"></span><br></br>
                    <p>Time: { course.time }</p><br></br>
                    
                  </div>
                  <div className="foreground">
                    <h1>Points: 50</h1>
                    <button onClick={() => courseDetail(course)}>View</button>      
                  </div>
                </div>
              
                

              )
              }
              else{
                return(
                  <div className="card" key={ course.id }>
                  <div className="background">
                    <strong>{ course.title }</strong><br></br>
                    <p>Time: { course.time }</p><br></br>
                  </div>
                  <div className="foreground">
                    <h1>Points: 50</h1>
                    <button onClick={() => courseDetail(course)}>View</button>      
                  </div>
                </div>
                )
              }
              
              
            })
          }
        </div>
      </div>
  );
}

function courseDetail(course){
  window.open('height=400, width=600')
}

export default courses;

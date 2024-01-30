import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Review from "./reviewModal";

const Cards = ({ item }) => {
  const user = useSelector((state) => state.auth.user)

    return(

    <div className="App">
    
    {
      
        item.map((course) =>
        {

            if (course.stars !== null){
              course.stars = course.stars.replace(/-?\d+(\.\d+)?/g, n => Number(n).toFixed(2))
                return(
                  
                    <Card className="card" border="dark" key={ course.id }>
                        <Card.Img className="Course_img" src={course.img} alt={course.title}/>

                        <Card.Title>{ course.title }</Card.Title><br/>
                        <Card.Text>Our Rating: {Math.round(course.rating * 100)/100} stars</Card.Text>
                        <Card.Text>Time: { course.time }</Card.Text>
                        <Card.Text>{ course.Level } level</Card.Text>
                      
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
                    </Card>
                  )
            }
            else{
                    return(
                      <Card className="card" border="dark" key={ course.id }>
                      <Card.Img className="Course_img" src={course.img} alt={course.title}/>

                      <Card.Title>{ course.title }</Card.Title><br/>
                      <Card.Text>Our Rating: {Math.round(course.rating * 100)/100} stars</Card.Text>
                      <Card.Text>Time: { course.time }</Card.Text>
                      <Card.Text>{ course.Level } level</Card.Text>
                      
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
                  </Card>
                        
      

                        
                      ) 
            }
        })
    }
    </div>
    )
}




export default Cards;
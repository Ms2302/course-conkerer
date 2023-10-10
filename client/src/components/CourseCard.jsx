import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import getStars from "./stars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = ({ item }) => {
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);

    const detailPage = (Product) =>
    {
        setDetail([{...Product}])
        setClose(true)
    }

    return(
        <div className="App">
        {
           
            close ?
            <div className="detail_container">
            <div className="detail_content">
            <button className="close" onClick={() => setClose(false)}><AiFillCloseCircle/></button>
            {
                detail.map((course) =>
                {                   
                  if (course.stars !== null){
                    course.stars = course.stars.replace(/-?\d+(\.\d+)?/g, n => Number(n).toFixed(2))
                    return(
                      <div>
                      <div className="detail_info">
                        <div className="img-box">
                          <img src="" alt={course.title}></img>
                        </div>
                        <div className="course_detail">
                          <h2>{course.title}</h2>
                          <h3>{course.time}</h3>
                          <h3>{course.stars}</h3>
                        </div>
                      </div>
                      <div className="courseLink">
                        <a href={course.URL} target="_blank">Go To Course</a> 
                      </div>
                      </div>
                      
                      
                  )   
                  }
                  else{
                    return(
                      <div className="detail_info">
                        <div className="img-box">
                          <img src="" alt={course.title}></img>
                        </div>
                        <div className="course_detail">
                          <h2>{course.title}</h2>
                          <p>{course.time}</p>
                        </div>
                        <div>
                        <a className="courseLink" href={course.URL} target="_blank">Go To Course</a> 
                        </div>
                      </div>
                  )   
                  }
                  
                })
            }
            </div>

        </div>:null
        }

    <div className="App">
    {
      
        item.map((course) =>
        {

            if (course.stars !== null){
              course.stars = course.stars.replace(/-?\d+(\.\d+)?/g, n => Number(n).toFixed(2))
                return(
                  
                    <div className="card" key={ course.id }>
                      <div className="background">
                        <strong>{ course.title }</strong><br></br>
                        <span id="stars">{course.stars}</span><br></br>
                        <p>Time: { course.time }</p><br></br>
                        
                      </div>
                      <div className="foreground">
                        <h1>Points: 50</h1>
                        <button onClick={() => detailPage(course)}>View</button>      
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
                            <button onClick={() => detailPage(course)}>View</button>      
                          </div>
                        </div>
                      ) 
            }
        })
    }
    </div>
    </div>
    )
}

export default Card;
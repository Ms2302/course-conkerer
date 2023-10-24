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
                        
                      <div className="courseLink">
                        <span class="btn btn-dark w-75">
                        <a href={course.URL} target="_blank">Go To Course</a> 
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
                            
                          <div className="courseLink">
                          <span class="btn btn-dark  w-75">
                            <a href={course.URL} target="_blank">Go To Course</a> 
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
import { React,useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Save from "./saveModal";
import Card from 'react-bootstrap/Card';
import Review from "./reviewModal";

const Cards = ({ item }) => {

  // Set user state
  const user = useSelector((state) => state.auth.user)
  const [error, setError] = useState(null)

 
    return(
    <div className="App">
    {
        // Map courses, handle execptions where level or time can be null
        item.map((course) =>
        {
              if(course.Level == null){
                course.Level = "No"
              }
              if(course.time == null){
                course.time = "?"
              }
                return(
                  
                    // Display course data and give unique key
                    <Card className="card" border="dark" key={ course.id }>
                        <Card.Img className="Course_img" src={course.img} alt={course.title}/>
                        {user ?
                          <Save id={course.id} courseName={course.title} courseLink={course.URL}></Save>
                        : null}

                        <Card.Title>{ course.title }</Card.Title><br/>
                        <Card.Text>Our Rating: {Math.round(course.rating * 100)/100} stars</Card.Text>
                        <Card.Text>Time: { course.time }</Card.Text>
                        <Card.Text>{ course.Level } level</Card.Text>
                      
                      <div className="courseLink">
                        <span id="course_btn" class="btn btn-dark w-75">
                          <a href={course.URL} rel="noreferrer" target="_blank" className="text-light">Go To Course</a> 
                      </span>
                      </div>
                      <div className="reviewLink">
                      {/*If user is logged in, display Review button*/}
                      {user ?
                        <div>
                        <span class="btn btn-dark">
                         <Review id={course.id} courseName={course.title}></Review>                       
                        </span>
                        </div>
 
                      : null}
                    </div>
                    </Card>
                  )
        })
    }
    </div>
    )
}




export default Cards;
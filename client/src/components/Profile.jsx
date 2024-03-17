import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegStar, FaStar } from "react-icons/fa";

import axios from "axios";
import Card from 'react-bootstrap/Card';


const Profile = () => {
  var [target, setTarget] = useState(new Date(''))
  const user = useSelector((state) => state.auth.user)
  const [points, setPoints] = useState([])
  const [tasks, setTasks] = useState(null)
  const [rank, setRank] = useState([])
  const [courses, setCourses] = useState([])
  const [error, setError] = useState(null)


  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/getTargetTime')
    .then(res => {
      target = new Date(res.data[0]["timestamp"]);

      console.log("TARGET", target)
      setTarget(target)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))

  const [countdown, setCountdown] = useState(calculateCountdown(target))

  useEffect(()=> {
    const interval = setInterval(()=>{
      setCountdown(calculateCountdown(target))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/LeaderBoard')
    .then(res => {
      let rank = res.data
      console.log(rank)
      setRank(rank)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))

  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/profile', {params: {user}})
    .then(res => {
      let points = res.data
      setPoints(points)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))

  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/checkActivityCount', {params: {user}})
    .then(res => {
      let tasks = res.data[0]['activitiesToday']
      setTasks(tasks)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))
  
  useDispatch(useEffect(() => {
    axios.get('http://localhost:8080/getSavedCourses', {params: {user}})
    .then(res => {
      let courses = res.data
      setCourses(courses)
      setError(null)
    }).catch(err => setError("couldnt fetch"))
  }, [user]))

  function UpdateTasks(targetTimestamp){
      const sqlTime = targetTimestamp.toISOString().slice(0,19).replace('T', ' ')
      console.log(sqlTime)
      axios.post('http://localhost:8080/updateTimestamp', {sqlTime})
      .then(res =>{
        setError(null)
      }).catch(err => setError("couldnt fetch"))

      axios.post('http://localhost:8080/updateTasks')
      .then(res =>{
        setError(null)
      }).catch(err => setError("couldnt fetch"))

    
}


  function calculateCountdown(target){
    const currentTimestamp = new Date()
    const difference = target - currentTimestamp
    console.log(difference)
    if (difference <= 1){
      target.setDate(target.getDate()+1)
      UpdateTasks(target)
      
      
      
    }
    const seconds = Math.floor((difference / 1000) % 60)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    return {hours, minutes, seconds}
  }

  async function unsave(id){
    axios.post('http://localhost:8080/unSaveCourse', {user, id})
    .then(res =>{
    setError(null)
  }).catch(err => setError("couldnt fetch"))}


  return(
    <div>
      <h1 className="pb-6 text-6xl text-center text-black">Profile Dashboard</h1>
      {user ? 
        <div>
        <h3 className="text-xl pt-10 text-center text-5xl  text-black">Hi {user} &#x1F44B;</h3>
        <div>
          {points.map(element => {
            return <h3 className=" text-3xl text-center text-black">Points Earned: &#x2B50; {element.points}</h3>
          })}
        </div>
        <div className="pl-60"><h3 className="text-xl pt-10 text-5xl  text-black">Number of tasks left today: {tasks}</h3></div>
        <div className="pl-60"><h3 className="text-xl pt-10 text-5xl  text-black">Tasks refresh in:  {countdown.hours} hour(s), {countdown.minutes} minute(s) and {countdown.seconds} second(s)</h3></div>

        <div className="pt-20">
        <table className="table table-hover table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Rank</th>
            <th>Points</th>
          </tr>
          </thead>
          <tbody>
          {rank.map(element =>{
            if(element.username == user){
              return(
                <tr >
                  <td className="text-success">You</td>
                  <td>{element.USER_RANK}</td>
                  <td>{element.points}</td>
                </tr>
              ) 
            }
            else return(
              <tr>
                <td>{element.username}</td>
                <td>{element.USER_RANK}</td>
                <td>{element.points}</td>
              </tr>
            )
          })}
          </tbody>
        </table>

        </div>
        <div>
        <br></br>
        <h3 className=" text-3xl text-center text-black">Saved Courses</h3>
        
        {courses.map(element => {
          return(
            <Card className="card" border="dark" key={ element.courseID }>
            <Card.Title>{ element.title }</Card.Title><br/>
            <button onClick={() => {
              unsave(element.courseID)
            }}>
              <FaStar className="d-flex text-center"></FaStar>
            </button>
            <div className="courseLink">
            <span id="course_btn" class="btn btn-dark w-75">
              <a href={element.link} rel="noreferrer" target="_blank" className="text-light">Go To Course</a> 
            </span>
            </div>
        </Card>
          )
        })}
        </div>
        </div>
        : null}
    </div>
  )
}


export default Profile;
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import axios from "axios";


function Review({courseName, id,  tasksLeft}){
    const [tasks, SetTasks] = useState(null)
    const [error, setError] = useState(null)
    const user = useSelector((state) => state.auth.user)
    const points = 25;
  
    async function SubmitRating(submitEvent){
      submitEvent.preventDefault();
      var rating = submitEvent.target.elements.rating.value
      await axios.get('http://localhost:8080/checkActivityCount', {params: {user}})
      .then(res =>{

        let tasks = res.data[0]["activitiesToday"]
        SetTasks(tasks)
        setError(null)
        console.log("task ", tasks)

        if (tasks <= 0){

          console.log("All tasks completed!")
        }
        else{

        axios.post('http://localhost:8080/changeActivityCount', {user})
        .then(res=>{
        }).catch(err => setError("couldn't adjust"))

        axios.post('http://localhost:8080/rate', {id,rating})
        .then(res=>{
        }).catch(err => setError("couldnt fetch")) 

        axios.post('http://localhost:8080/addPoints',{user, points})
        .then(res=>{
        }).catch(err => setError("couldnt fetch"))
      }
    })}
      
      
      
    return(
        <div>
        <form onSubmit={SubmitRating}>
        <div class="modal fade" id={id}  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLabel">{courseName}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-dark">
              Rate this course!
              <br/>
              <label for="customRange3" class="form-label"></label>
            <output>0</output>
            <input type="range" class="form-range" name="rating" min="0" max="5" step="0.5" id="customRange3"></input>
            <output> 5</output>
            </div>
            <div class="modal-footer">
              <button type="button" class=" text-danger close" name="close" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary text-primary">Submit Rating</button> 
            </div>
          </div>
        </div>
      </div>
      </form>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${id}`}>
        Review
      </button>
      </div>
    )  
}

export default Review
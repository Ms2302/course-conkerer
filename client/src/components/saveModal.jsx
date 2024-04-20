import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import axios from "axios";


function Save({courseName, id, courseLink}){  
    const [error, setError] = useState(null)
    const [icon, setIcon] = useState(FaRegStar)
    const [visible, setVisible] = useState(false)
    const points = 25;
    const user = useSelector((state) => state.auth.user)

    const [state, setState] = useState({open: false})

    // Function to change icon to represent saving
    const changeIcon = () => {
        setVisible(!visible)
        setIcon(visible ? FaRegStar : FaStar)

    }

    // Post to database which course the user saves
    async function saveCourse(){
        axios.post('http://localhost:8080/saveCourse', {user, id, courseName, courseLink})
        .then(res =>{
        setError(null)
    }).catch(err => setError("couldnt fetch"))

        // Check if user still has tasks left today
        await axios.get('http://localhost:8080/checkActivityCount', {params: {user}})
        .then(res =>{

        let tasks = res.data[0]["activitiesToday"]
        setError(null)
        console.log("task ", tasks)

        if (tasks <= 0){

            console.log("All tasks completed!")
        }
        else{

        // Reduce tasks remaining by 1 for today
        axios.post('http://localhost:8080/changeActivityCount', {user})
        .then(res=>{
        }).catch(err => setError("couldn't adjust"))

        // Award points to the user
        axios.post('http://localhost:8080/addPoints',{user, points})
        .then(res=>{
        }).catch(err => setError("couldnt fetch"))
        }})}
    
    return(

        // Alert users on what they have saved 
        <div>
            <button onClick={() =>{
                alert("you saved " + courseName + " ID: " + id)
                changeIcon()
                saveCourse()
                
            }}>
                {icon}
            </button>
        </div>
    )  
}

export default Save
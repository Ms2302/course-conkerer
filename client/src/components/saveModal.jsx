import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import axios from "axios";


function Save({courseName, id, courseLink}){  
    const [error, setError] = useState(null)
    const [savedState, setSavedState] = useState("click")
    const [icon, setIcon] = useState(FaRegStar)
    const [visible, setVisible] = useState(false)
    const user = useSelector((state) => state.auth.user)

    const [state, setState] = useState({open: false})
    const onStateChange = ({open}) => setState({open})
    const {open} = state

    const changeIcon = () => {
        setVisible(!visible)
        setIcon(visible ? FaRegStar : FaStar)

    }

    async function saveCourse(){
        axios.post('http://localhost:8080/saveCourse', {user, id, courseName, courseLink})
        .then(res =>{
        setError(null)
    }).catch(err => setError("couldnt fetch"))}
    
    return(
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
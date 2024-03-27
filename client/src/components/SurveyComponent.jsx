import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function SurveyComponent() {
    const survey = new Model(json);
    const [error, setError] = useState(null)
    const user = useSelector((state) => state.auth.user)

    survey.onComplete.add((sender) => {

        const answers = sender.data;
        const answerOne = (answers.question1)
        const answerTwo = (answers.question2)

        axios.post('http://localhost:8080/questionnaire', {user, answerOne, answerTwo})
        .then(res => {
            console.log("submitted")
        }).catch(err => setError("couldnt fetch")) 
    },[user]);
    return <Survey model={survey}/>
}

export default SurveyComponent;
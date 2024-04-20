//Questionnaire JSON
export const questionnaireJson = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "What Kind Of Courses Are You Interested In",
        "isRequired": true,
        "choices": [
         {
          "value": "AI",
          "text": "AI"
         },
         {
          "value": "Design",
          "text": "Design"
         },
         {
          "value": "Security",
          "text": "Security"
         },
         {
            "value": "Cloud",
            "text": "Cloud"
         },
         {
            "value": "Finance",
            "text": "Finance"
         },
         {
            "value": "Maths",
            "text": "Maths"
         }
        ],
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "What Level Courses Are You Looking For?",
        "isRequired": true,
        "choices": [
         {
          "value": "Introductory",
          "text": "Beginner"
         },
         {
          "value": "Intermediate",
          "text": "Intermediate"
         },
         {
          "value": "Advanced",
          "text": "Advanced"
         }
        ]
       }
      ]
     }
    ]
   }
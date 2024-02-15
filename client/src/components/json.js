export const json = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
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
        "colCount":2,
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "What Level Courses Are You Looking For?",
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
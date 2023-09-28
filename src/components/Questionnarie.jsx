import React from "react";

import { Model } from 'survey-core';
import { Survey } from "survey-react-ui";

const surveyJson = {
    "title": "Tailoring Courses To You",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "user_role",
        "title": "What best describes your role?",
        "showOtherItem": true,
        "choices": [
         "Engineering Lead",
         "Project Manager",
         "Software Developer",
         "Designer",
         "Product Manager",
         "Customer Support"
        ],
        "otherText": "Other",
        "colCount": 3
       },
       {
        "type": "radiogroup",
        "name": "years_experience",
        "title": "How many years experience do you have in your field?",
        "choices": [
         {
          "value": "created",
          "text": "I created my account"
         },
         {
          "value": "invited",
          "text": "I was invited to an account"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "product_discovering",
        "title": "How much time do you aim to spend on courses per week? ",
        "showOtherItem": true,
        "choices": [
         "Friend or colleague",
         "Search engine",
         "Facebook",
         "Twitter",
         "Blog"
        ],
        "otherText": "Other",
        "colCount": 3
       },
       {
        "type": "radiogroup",
        "name": "paid_customer",
        "title": "Do you currently pay for the product? ",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "product_fit",
        "title": "How would you feel if you could no longer use the product?",
        "isRequired": true,
        "choices": [
         {
          "value": "3",
          "text": "Very disappointed"
         },
         {
          "value": "2",
          "text": "Somewhat disappointed"
         },
         {
          "value": "1",
          "text": "Not disappointed"
         }
        ]
       },
       {
        "type": "comment",
        "name": "product_fit_comment",
        "visibleIf": "{product_fit} notempty",
        "title": "Please help us understand why you selected the answer above"
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "product_alternative",
        "title": "What would you use as an alternative if [the product] were no\nlonger available?",
        "showOtherItem": true,
        "choices": [
         "Alternative 1",
         "Alternative 2",
         "Alternative 3",
         "Alternative 4",
         "Alternative 5",
         "Alternative 6"
        ],
        "otherText": "Other (please name)",
        "colCount": 3
       },
       {
        "type": "radiogroup",
        "name": "product_benefit",
        "title": "What is the primary benefit that you have received from the\nproduct?",
        "showOtherItem": true,
        "choices": [
         "Benefit 1",
         "Benefit 2",
         "Benefit 3",
         "Benefit 4",
         "Benefit 5",
         "Benefit 6"
        ],
        "colCount": 3
       },
       {
        "type": "radiogroup",
        "name": "product_recommend",
        "title": "Have you recommended the product to anyone?",
        "choices": [
         "Yes",
         "No"
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        "name": "nps_score",
        "title": "How likely are you to recommend the product to a friend or\ncolleague? ",
        "isRequired": true,
        "rateMin": 0,
        "rateMax": 10,
        "minRateDescription": "Most unlikely",
        "maxRateDescription": "Most likely"
       },
       {
        "type": "radiogroup",
        "name": "favorite_functionality",
        "title": "What's your favorite functionality / add-on for the product?",
        "showOtherItem": true,
        "choices": [
         "Feature 1",
         "Feature 2",
         "Feature 3",
         "Feature 4",
         "Feature 5",
         "Feature 6"
        ],
        "colCount": 3
       },
       {
        "type": "comment",
        "name": "product_improvement",
        "title": "How could the product be improved to better meet your\nneeds?"
       }
      ]
     },
    ]
   };const themeJson = {
     "cssVariables": {
       "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
       "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
       "--sjs-general-backcolor-dim": "rgba(243, 243, 243, 1)",
       "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
       "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
       "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
       "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
       "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
       "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
       "--sjs-primary-backcolor": "rgba(25, 179, 148, 1)",
       "--sjs-primary-backcolor-light": "rgba(25, 179, 148, 0.1)",
       "--sjs-primary-backcolor-dark": "rgba(20, 164, 139, 1)",
       "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
       "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
       "--sjs-base-unit": "8px",
       "--sjs-corner-radius": "4px",
       "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
       "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
       "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
       "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
       "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
       "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
       "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
       "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
       "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
       "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
       "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
       "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
       "--sjs-special-red": "rgba(229, 10, 62, 1)",
       "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
       "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
       "--sjs-special-green": "rgba(25, 179, 148, 1)",
       "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
       "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
       "--sjs-special-blue": "rgba(67, 127, 217, 1)",
       "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
       "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
       "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
       "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
       "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
       "--sjs-article-font-xx-large-fontSize": "64px",
       "--sjs-article-font-xx-large-textDecoration": "none",
       "--sjs-article-font-xx-large-fontWeight": "700",
       "--sjs-article-font-xx-large-fontStyle": "normal",
       "--sjs-article-font-xx-large-fontStretch": "normal",
       "--sjs-article-font-xx-large-letterSpacing": "0",
       "--sjs-article-font-xx-large-lineHeight": "64px",
       "--sjs-article-font-xx-large-paragraphIndent": "0px",
       "--sjs-article-font-xx-large-textCase": "none",
       "--sjs-article-font-x-large-fontSize": "48px",
       "--sjs-article-font-x-large-textDecoration": "none",
       "--sjs-article-font-x-large-fontWeight": "700",
       "--sjs-article-font-x-large-fontStyle": "normal",
       "--sjs-article-font-x-large-fontStretch": "normal",
       "--sjs-article-font-x-large-letterSpacing": "0",
       "--sjs-article-font-x-large-lineHeight": "56px",
       "--sjs-article-font-x-large-paragraphIndent": "0px",
       "--sjs-article-font-x-large-textCase": "none",
       "--sjs-article-font-large-fontSize": "32px",
       "--sjs-article-font-large-textDecoration": "none",
       "--sjs-article-font-large-fontWeight": "700",
       "--sjs-article-font-large-fontStyle": "normal",
       "--sjs-article-font-large-fontStretch": "normal",
       "--sjs-article-font-large-letterSpacing": "0",
       "--sjs-article-font-large-lineHeight": "40px",
       "--sjs-article-font-large-paragraphIndent": "0px",
       "--sjs-article-font-large-textCase": "none",
       "--sjs-article-font-medium-fontSize": "24px",
       "--sjs-article-font-medium-textDecoration": "none",
       "--sjs-article-font-medium-fontWeight": "700",
       "--sjs-article-font-medium-fontStyle": "normal",
       "--sjs-article-font-medium-fontStretch": "normal",
       "--sjs-article-font-medium-letterSpacing": "0",
       "--sjs-article-font-medium-lineHeight": "32px",
       "--sjs-article-font-medium-paragraphIndent": "0px",
       "--sjs-article-font-medium-textCase": "none",
       "--sjs-article-font-default-fontSize": "16px",
       "--sjs-article-font-default-textDecoration": "none",
       "--sjs-article-font-default-fontWeight": "400",
       "--sjs-article-font-default-fontStyle": "normal",
       "--sjs-article-font-default-fontStretch": "normal",
       "--sjs-article-font-default-letterSpacing": "0",
       "--sjs-article-font-default-lineHeight": "28px",
       "--sjs-article-font-default-paragraphIndent": "0px",
       "--sjs-article-font-default-textCase": "none"
     },
     "isPanelless": false
   }

function Questionnaire(){
    const survey = new Model(surveyJson);
    return(<Survey model={survey} />);
}

export default Questionnaire;
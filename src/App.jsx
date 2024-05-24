import Description from "./components/Description/Description"

import Options from "./components/Options/Options"

import Feedback from "./components/Feedback/Feedback"

import { useState } from 'react';



export default function App() {

const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description
        title={"Sip Happens Café"}
        text={"Please leave your feedback about our service by selecting one of the options below."}
      ></Description>

      <Options btnTxt1={"Good"} btnTxt2={"Neutral"} btnTxt3={"Bad"} btnTxt4={"Reset"}
          updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}></Options>

      <Feedback
        feedback={feedback}
      ></Feedback>
    </>
  )
}

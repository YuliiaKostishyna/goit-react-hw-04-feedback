// import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section"
import Notification from "./Notification/Notification"
import { useState} from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const onFeedback = e => {
  const optionFeedback = e.target.name;
  switch (optionFeedback) {
    case 'good':
      setGood(good + 1);
      break;
      case 'neutral':
        setNeutral(neutral+ 1);
        break;
        case 'bad':
          setBad(bad + 1);
          break;
          default:
  }
}
const options = ['good', 'neutral', 'bad'];

const countTotalFeedback = good + neutral + bad;

const countPositiveFeedbackPercentage = isNaN(good/countTotalFeedback * 100) ? 0 : (good/countTotalFeedback * 100).toFixed(0);


  const buttonClick = onFeedback;
 
    
  // };
  // countTotalFeedback = () => {
     
   
  //   const initialValue = 0;
  //   const sumWithInitial = Object.values(this.state).reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     initialValue
  //   );
  //   return (sumWithInitial)
  // }
  // countPositiveFeedbackPercentage = () => {
   
  //   const positiveFeedback = this.countTotalFeedback();
    
  //   return isNaN(this.state.good/positiveFeedback * 100) ? 0 : (this.state.good/positiveFeedback * 100).toFixed(0);
  // }
 
      
        
       
return (
        <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
      
      <FeedbackOptions options = {options} onFeedback = {buttonClick}/>
      </Section>
      
      <Section title="Statistics">
      {countTotalFeedback === 0 ?
      <Notification message="There is no feedback"></Notification>
:
      <Statistics 
      good = {good} 
      neutral = {neutral} 
      bad = {bad} 
      total = {countTotalFeedback} 
      positiveFeedback = {countPositiveFeedbackPercentage} ></Statistics>}
      </Section>
      
      </div>
      
      
   
  
    )
      }
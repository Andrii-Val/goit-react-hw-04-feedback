import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

import { Notification } from "components/Notification/Notification";
import { Section } from "./FeedBack/FeedBack";
import { useState } from "react";
const styles= {
  padding: 20,
}
export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

  clickButton = evt => {
      this.setState(prevState => {
          return {
              [evt]: prevState[evt] + 1,
          };
      });
  };


  // neutralClick= ()=>{
  //     this.setState((prevState) =>{
  //         return{
  //             neutral: prevState.neutral + 1,
  //         };
  //     }); };
  // badClick= ()=>{
  //     this.setState(prevState =>{
  //         return{
  //             bad: prevState.bad + 1,
  //         };
  //     }); };

  countPositiveFeedbackPercentage =()=>{
      const{good}=this.state;
      return this.countTotalFeedback() === 0 ? 0 : (good / this.countTotalFeedback()) * 100;
  }
  
  countTotalFeedback =()=>{
     const{good, neutral, bad } = this.state;
     return good + neutral + bad;
      };



  return(
      <>
      <Section  style={styles} title="Please leave feedback">
      
        
          <FeedbackOptions title={"Please leave feedback"} options={Object.keys({ good, neutral, bad })} onLeaveFeedback={this.clickButton}  />
      </Section> 
      <Section  style={styles} title="Statistics">
     
          {countTotalFeedback()=== 0 ? <Notification message={("There is no feedback")}/> :
      <Statistics good={good} 
      neutral={neutral}
       bad={bad}
        total={countTotalFeedback()} 
        positivePercentage={countPositiveFeedbackPercentage()}/>
}
</Section>
 </>
  )
};





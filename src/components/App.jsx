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

    const clickButton = evt => {
        if (evt === 'good') {
          setGood(prevState => prevState + 1);
        } else if (evt === 'neutral') {
          setNeutral(prevState => prevState + 1);
        } else if (evt === 'bad') {
          setBad(prevState => prevState + 1);
        } else {
          console.log('error' + evt)
        };
      };
      
      const countTotalFeedback = () => {
        const result = good + neutral + bad;
        return result;
        };
      
      const countPositiveFeedbackPercentage = () => {
          const result = countTotalFeedback();
              if (result !== 0) {
                  const percentage = (good * 100) / result;
                  return Math.round(percentage);
              }
              return 0;
          };
      


  return(
      <>
      <Section  style={styles} title="Please leave feedback">
      
        
          <FeedbackOptions title={"Please leave feedback"} options={Object.keys({ good, neutral, bad })} onLeaveFeedback={clickButton}  />
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





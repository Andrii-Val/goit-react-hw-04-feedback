import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Component } from "react";
import { Notification } from "components/Notification/Notification";
import { Section } from "./FeedBack/FeedBack";
const styles= {
  padding: 20,
}
export  class App extends Component {
  state = {
      good: 0,
neutral: 0,
bad: 0,

  };

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

render(){
const{good, neutral, bad } = this.state;
const {countTotalFeedback,
  countPositiveFeedbackPercentage} = this;

  return(
      <>
      <Section  style={styles} title="Please leave feedback">
      
        
          <FeedbackOptions title={"Please leave feedback"} options={Object.keys(this.state)} onLeaveFeedback={this.clickButton}  />
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



};

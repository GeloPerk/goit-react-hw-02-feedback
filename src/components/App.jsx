import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { Div } from './App.styled';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick  = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  // onClickGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };

  // onClickNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };

  // onClickBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  countTotalFeedBack = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positiveFeedback = 0;

    positiveFeedback = (good / (good + neutral + bad)) * 100;

    if (isNaN(positiveFeedback)) {
      return 0;
    }

    return `${positiveFeedback.toFixed(0)} %`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback;

    return (
      <Div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
          {/* <FeedbackOptions
            onClickGood={this.onClickGood}
            onClickNeutral={this.onClickNeutral}
            onClickBad={this.onClickBad}
          /> */}
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedBack()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback" />}
        </Section>
      </Div>
    );
  }
}

export default App;
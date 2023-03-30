import React, { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

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
      return 'no feedback';
    }

    return `${positiveFeedback.toFixed(0)} %`;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <section>
        <h2>Please leave feedback</h2>
        <div className="btns">
          <button type="button" onClick={this.onClickGood}>
            Good
          </button>
          <button type="button" onClick={this.onClickNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.onClickBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Netural: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedBack()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
        </div>
      </section>
    );
  }
};

export default Feedback;
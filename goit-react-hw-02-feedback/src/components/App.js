import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counter = (e) => {
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions counter={this.counter} />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;

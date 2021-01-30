import React, { Component } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Buttons from "./components/Buttons";
import Heading from "./components/Heading";

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  feedbackCounter = (e) => {
    this.setState((prevState) => {
      const buttonId = e.target.id;
      return {
        [buttonId]: prevState[buttonId] + 1,
      };
    });
  };

  totalFeedbackCounter = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  positiveFeedbackPercentage = () => {
    return Math.round((100 / this.totalFeedbackCounter()) * this.state.good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbacksTotal = this.totalFeedbackCounter();
    return (
      <>
        <Section title="Please leave feedback">
          <Buttons
            options={this.state}
            onLeaveFeedback={this.feedbackCounter}
          />
        </Section>
        <Section title="Statistics">
          {feedbacksTotal === 0 && <Heading message="No feedback given" />}

          {feedbacksTotal > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbacksTotal}
              positivePercentage={this.positiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

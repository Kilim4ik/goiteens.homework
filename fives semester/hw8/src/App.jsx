import "./App.css";
import { Component } from "react";
import Section from "./assets/Section";
import FeedbackOptions from "./assets/components/feedback-options/FeedbackOptions";
import Statistic from "./assets/components/statistic/Statistic";
import Notification from "./assets/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = (type) => {
    this.setState((prev) => ({
      [type]: prev[type] + 1,
    }));
  };
  findTotalFeedbacks = () =>
    Object.values(this.state).reduce((acc, elem) => (acc += elem), 0);

  findPositiveFeedbacks = () =>
    Math.round((100 / this.findTotalFeedbacks()) * this.state.good);

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.addFeedback} />
        </Section>
        <Section title="Statistic">
          {this.findTotalFeedbacks() === 0 ? (
            <Notification>
              <img
                width={42}
                height={60}
                src="https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-3d0p-p-kartinki-zhdun-na-prozrachnom-fone-3.png"
                alt=""
              />
              <p>No feedback given</p>
            </Notification>
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.findTotalFeedbacks()}
              positiveFeedbacks={this.findPositiveFeedbacks()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

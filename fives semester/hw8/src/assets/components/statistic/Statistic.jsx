import { Component } from "react";

class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedbacks } = this.props;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positiveFeedbacks}%</li>
      </ul>
    );
  }
}
export default Statistic;

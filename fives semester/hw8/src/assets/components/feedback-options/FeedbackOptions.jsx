import { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <ul>
        <li>
          <button onClick={() => onClick("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => onClick("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => onClick("bad")}>Bad</button>
        </li>
      </ul>
    );
  }
}
export default FeedbackOptions;

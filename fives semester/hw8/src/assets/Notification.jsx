import { Component } from "react";

class Notification extends Component {
  render() {
    return <div className="notification">{this.props.children}</div>;
  }
}
export default Notification;

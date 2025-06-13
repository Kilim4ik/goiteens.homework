import { Component } from "react";

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} className="Button">
        Get more
      </button>
    );
  }
}
export default Button;

import { Component } from "react";

class Finder extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <p>Find contact</p>
        <input
          type="text"
          onChange={(e) => onChange(e.currentTarget.value.trim())}
        />
      </>
    );
  }
}
export default Finder;

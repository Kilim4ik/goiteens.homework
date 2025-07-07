import { Component } from "react";

class Section extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
      </section>
    );
  }
}
export default Section;

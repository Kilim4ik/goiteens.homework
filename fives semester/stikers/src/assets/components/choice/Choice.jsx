import { Component } from "react";
import styles from "./Choice.module.css";
class Choice extends Component {
  render() {
    const { stikers } = this.props;

    return (
      <>
        {stikers.map((stiker, index) => (
          <div key={index}>
            <p className={styles.text}>{stiker.label}</p>
          </div>
        ))}
      </>
    );
  }
}

export default Choice;

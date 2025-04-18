import { Component } from "react";
import styles from "./DeleteButton.module.css";
class DeleteButton extends Component {
  render() {
    const { id, onClick } = this.props;
    return (
      <button className={styles.button} onClick={() => onClick(id)}>
        x
      </button>
    );
  }
}
export default DeleteButton;

import { Component } from "react";
import DeleteButton from "../delete-btn/DeleteButton";
import styles from "./TaskListItem.module.css";
class TaskListItem extends Component {
  render() {
    const { task, deleteOnClick } = this.props;
    const { id, text } = task;
    return (
      <li className={styles.item}>
        <b>{text}</b>
        <DeleteButton id={id} onClick={deleteOnClick} />
      </li>
    );
  }
}
export default TaskListItem;

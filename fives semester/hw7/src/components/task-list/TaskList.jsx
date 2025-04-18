import { Component } from "react";
import TaskListItem from "../task-list-item/TaskListItem";
import styles from "./TaskList.module.css";

class TaskList extends Component {
  render() {
    const { tasks, deleteOnClick } = this.props;

    return (
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            deleteOnClick={deleteOnClick}
          />
        ))}
      </ul>
    );
  }
}
export default TaskList;

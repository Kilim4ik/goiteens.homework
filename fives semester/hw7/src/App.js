import { Component } from "react";
import "./App.css";
import TaskList from "./components/task-list/TaskList";

class App extends Component {
  state = {
    tasks: [
      { id: 1, text: "Вивчити React" },
      { id: 2, text: "Зробити ToDo App" },
      { id: 3, text: "Піти пити колу 🥤" },
    ],
  };
  deleteTask = (id) => {
    return this.state.tasks.filter((task) => task.id !== +id);
  };
  deleteOnClick = (id) => {
    this.setState({ tasks: this.deleteTask(id) });
  };
  render() {
    return (
      <div className="App">
        <TaskList tasks={this.state.tasks} deleteOnClick={this.deleteOnClick} />
      </div>
    );
  }
}

export default App;

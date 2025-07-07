import { Component } from "react";
import "./App.css";
import StikerList from "./assets/components/stiker-list/StikerList";
import stikers from "../data/stikers.json";
import Choice from "./assets/components/choice/Choice";

class App extends Component {
  state = {
    stikers: [...stikers],
    followingStikers: [],
  };

  followStiker = (label) => {
    return this.state.stikers.find((item) => item.label === label);
  };

  onStikerClick = (label) => {
    const stiker = this.followStiker(label);

    //* for one item

    //? in the task writes only one item
    this.setState({ followingStikers: [stiker] });

    //* for following list
    // this.setState((prev) => ({
    //   followingStikers: [...prev.followingStikers, stiker],
    // }));
  };

  render = () => {
    const { stikers, followingStikers } = this.state;
    return (
      <>
        <div className="App">
          {this.state.followingStikers.length !== 0 && (
            <Choice stikers={followingStikers} />
          )}
          <StikerList stikers={stikers} onClick={this.onStikerClick} />
        </div>
      </>
    );
  };
}

export default App;

import { Component } from "react";
import Stiker from "../stiker/Stiker";

import styles from "./StikerList.module.css";
class StikerList extends Component {
  render() {
    const { stikers, onClick } = this.props;
    return (
      <ul className={styles.list}>
        {stikers.map(({ label, img }, index) => (
          <Stiker
            key={index}
            img={img}
            label={label}
            onClick={() => onClick(label)}
          />
        ))}
      </ul>
    );
  }
}
export default StikerList;

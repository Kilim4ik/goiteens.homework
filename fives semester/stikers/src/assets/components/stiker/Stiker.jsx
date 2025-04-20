import { Component } from "react";
import styles from "./Stiker.module.css";
class Stiker extends Component {
  render() {
    const { label, img, onClick } = this.props;
    return (
      <li className={styles.stiker} onClick={onClick}>
        <img className={styles.image} src={img} alt="" />
        <div className={styles.overlay}>
          <p className={styles.label}>{label}</p>
        </div>{" "}
      </li>
    );
  }
}
export default Stiker;

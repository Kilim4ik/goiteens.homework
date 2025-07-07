import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.friendListItem}>
      <span
        className={`${styles.status} ${isOnline && styles.isOnline}`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={name + " avatar"}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

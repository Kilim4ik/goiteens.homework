import styles from "./FriendList.module.css";
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

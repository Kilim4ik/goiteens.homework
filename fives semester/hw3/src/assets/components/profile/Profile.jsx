import styles from "./Profile.module.css";
import { nanoid } from "nanoid";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={`${username} avater`}
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map((listItem) => (
          <li key={nanoid()}>
            <span className={styles.label}>{listItem[0]}</span>
            <span className={styles.quantity}>{listItem[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

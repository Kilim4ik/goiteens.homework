import FriendListItem from "./FriendsListItem";
import styles from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

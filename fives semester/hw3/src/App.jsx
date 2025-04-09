import users from "../data/users.json";
import stats from "../data/stats.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { nanoid } from "nanoid";

import "./App.css";
import Profile from "./assets/components/profile/Profile";
import Statistics from "./assets/components/statistics/Statistics";
import FriendList from "./assets/components/friends/FriendList";
import TransactionHistory from "./assets/components/transactions/TransactionHistory";

function App() {
  return (
    <>
      {users.map((user) => (
        <Profile
          key={nanoid()}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
      <Statistics title="title" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;

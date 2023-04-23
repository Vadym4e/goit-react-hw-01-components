import { Profile } from './Profile/Profile';
import user from './Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';
import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div class="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};

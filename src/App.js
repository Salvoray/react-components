import UserProfile from './components/userProfile';
import { avatar, name, tag, location, stats } from './data/user.json';
import Statistics from './components/statistics';
import statsData from './data/statisticalData.json';
import FriendList from './components/friendList';
import friends from './data/friends.json';
import TransactionHistory from './components/transactionHistory';
// import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div>
      <p>App main page</p>
      <UserProfile avatar={avatar} name={name} tag={tag} location={location} stats={stats} />
      <Statistics title="Upload Stats" stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;

import { Box } from './Box';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userInfo from '../components/Data/user.json';
import statData from '../components/Data/data.json';
import friends from '../components/Data/friends.json';
import transactions from '../components/Data/transactions.json';

export const App = () => {
  return (
    <Box as="section" py={3} width="100%">
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics title="Upload stats" stats={statData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Box>
  );
};

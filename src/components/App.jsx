import Profile from './Profile/Profile';

import { Box } from './Box';
import Statistics from './Statistics/Statistics';
import userInfo from '../components/Data/user.json';
import data from '../components/Data/data.json';

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
      <Statistics title="Upload stats" stats={data} />
    </Box>
  );
};

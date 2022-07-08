import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { Box } from 'components/Box';
import { List } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Box as="section" py={3} width="100%">
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </List>
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

import PropTypes from 'prop-types';
import { ListItem, Avatar, Name, Status } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

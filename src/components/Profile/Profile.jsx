import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatList,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box as="section" py={3} width="100%">
      <ProfileWrap>
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <StatList>
          <StatItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatItem>
          <StatItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatItem>
        </StatList>
      </ProfileWrap>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

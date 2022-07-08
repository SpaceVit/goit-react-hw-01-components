import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatisticsWrap, StatList, StatItem } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Box as="section" py={3} width="100%">
      <StatisticsWrap>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </StatItem>
          ))}
        </StatList>
      </StatisticsWrap>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

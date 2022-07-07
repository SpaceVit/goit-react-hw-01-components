import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, StatisticsWrap } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Box as="section" py={3} width="100%">
      <StatisticsWrap>
        {title && <Title>{title}</Title>}

        <ul class="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li class="item" key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          ))}
        </ul>
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

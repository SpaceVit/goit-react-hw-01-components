import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  TransactionHistoryTable,
  TransactionHead,
  Th,
  Td,
  Tr,
  Tbody,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Box as="section" py={3} width="100%">
      <TransactionHistoryTable>
        <TransactionHead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </TransactionHead>

        <Tbody>
          {items.map(({ id, type, amount, currency }) => (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          ))}
        </Tbody>
      </TransactionHistoryTable>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

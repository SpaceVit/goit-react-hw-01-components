import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  margin: 0px auto;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  background-color: ${props => props.theme.colors.cardBackground};
`;

export const TransactionHead = styled.thead`
  background-color: ${props => props.theme.colors.cardItemBackground};
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.s};
  text-transform: uppercase;
`;

export const Th = styled.th`
  width: calc(100% / 3);
  height: 50px;
  text-align: center;
  border: 1px solid #555;
  background-color: #2134dd8f;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.s};
  text-transform: uppercase;
`;

export const Td = styled.td`
  width: calc(100% / 3);
  height: 50px;
  text-align: center;
  border: 1px solid #555;
`;

export const Tr = styled.tr`
  background-color: ${props => props.theme.colors.secondaryCardItemBackground};
  text-transform: uppercase;
  :nth-child(even) {
    background-color: ${props => props.theme.colors.avatarBackground};
    color: ${props => props.theme.colors.mainText};
  }
  :hover {
    background-color: ${props => props.theme.colors.cardItemBackground};
    color: ${props => props.theme.colors.mainText};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

export const Tbody = styled.tbody`
  background-color: ${props => props.theme.colors.cardBackground};
`;

import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  margin: 0px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  background-color: ${props => props.theme.colors.cardBackground};
`;

export const TransactionHead = styled.thead`
  background-color: ${props => props.theme.colors.cardItemBackground};
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Th = styled.th`
  width: calc(100% / 3);
  height: 50px;
  text-align: center;
  border: 1px solid #555;
  background-color: #2134dd8f;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Td = styled.th`
  width: calc(100% / 3);
  height: 50px;
  text-align: center;
  border: 1px solid #555;
`;

export const Tr = styled.tr`
  background-color: rgb(255, 255, 255);
  text-transform: uppercase;
  :nth-child(even) {
    background-color: rgb(231, 227, 250);
  }
  :hover {
    background-color: ${props => props.theme.colors.cardItemBackground};
    color: ${props => props.theme.colors.mainText};
  }
`;

export const Tbody = styled.tbody`
  background-color: #b3cce6;
`;

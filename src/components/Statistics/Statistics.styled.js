import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.l};
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatisticsWrap = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  color: #fff;
  background-color: rgb(202, 214, 240);
`;

import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  margin: 0px auto;
  padding: 30px 0;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.cardBackground};
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
`;

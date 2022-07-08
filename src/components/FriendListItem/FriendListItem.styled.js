import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 250px;
  padding: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.cardItemBackground};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding: ${props => props.theme.space[1]}px;
  margin-right: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.avatarBackground};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

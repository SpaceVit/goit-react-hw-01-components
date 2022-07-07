import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsWrap = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.cardBackground};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.l};
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatList = styled.ul`
  display: flex;
  background-color: ${getRandomHexColor()};
  border-bottom-right-radius: ${props => props.theme.radii.normal};
  border-bottom-left-radius: ${props => props.theme.radii.normal};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  color: ${props => props.theme.colors.mainText};
  padding: ${props => props.theme.space[2]}px;
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.cardBackground};
  :first-child {
    border-bottom-left-radius: ${props => props.theme.radii.normal};
  }
  :last-child {
    border-bottom-right-radius: ${props => props.theme.radii.normal};
  }
`;

import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 300px;
  height: auto;
  margin: 0 auto;
  padding-top: ${props => props.theme.space[4]}px;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.cardBackground};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 150px;
  margin: auto;
  background-color: ${props => props.theme.colors.avatarBackground};
  border-radius: ${props => props.theme.radii.round};
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.cardItemBackground}; ;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  letter-spacing: 0.06em;
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.mainText};
`;

export const Tag = styled.p`
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondaryText};
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const Location = styled.p`
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondaryText};
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  border-bottom-right-radius: ${props => props.theme.radii.normal};
  border-bottom-left-radius: ${props => props.theme.radii.normal};
`;

export const StatItem = styled.li`
  width: 120px;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.cardBackground};
  background-color: ${props => props.theme.colors.cardItemBackground};

  :first-child {
    border-bottom-left-radius: ${props => props.theme.radii.normal};
  }
  :last-child {
    border-bottom-right-radius: ${props => props.theme.radii.normal};
  }
`;

export const Label = styled.span`
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.mainText};
  margin-bottom: ${props => props.theme.space[1]}px;
`;

export const Quantity = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondaryText};
`;

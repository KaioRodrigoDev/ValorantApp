import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const AbilityContainer = styled(LinearGradient).attrs({
  colors: ['#B1414C', '#18344C'],
  start: {x: 0, y: -1},
  end: {x: 1, y: 1},
})`
  background-color: #cecece;
  margin: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
`;

export const TextContainer = styled.View`
  width: 70%;
  padding-left: 10px;
`;

export const AbilityTitle = styled.Text`
  font-family: 'Tungsten-Bold';
  font-size: 35px;
  color: white;
`;

export const AbilityDescription = styled.Text`
  margin: 0 4px;
  color: white;
`;

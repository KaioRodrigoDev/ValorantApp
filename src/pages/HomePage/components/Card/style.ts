import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#B1414C', '#18344C'],
  start: {x: 0, y: -1},
  end: {x: 1, y: 1},
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const AgentContainer = styled.TouchableOpacity``;

export const AgentImage = styled.Image`
  width: 100px;
  height: 100px;
  max-width: 100%;
  max-height: 100%;
`;

export const AgentTitle = styled.Text`
  font-size: 20px;
  font-family: 'valorant';
  color: white;
`;

export const AgentDescription = styled.Text`
  font-family: 'valorant';
  color: white;
`;

export const AgentAreaText = styled.View`
  width: 77%;
  margin-left: 10px;
`;

export const AbilityContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

export const IconImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 5%;
`;

import styled from 'styled-components/native';

export const AgentContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;

export const AgentImage = styled.Image`
  width: 100px;
  height: 100px;
  max-width: 20%;
  max-height: 80%;
`;

export const AgentTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const AgentDescription = styled.Text``;

export const AgentText = styled.View`
  width: 77%;
  margin-left: 10px;
`;

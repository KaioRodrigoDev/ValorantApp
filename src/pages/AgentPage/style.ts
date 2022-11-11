import styled from 'styled-components/native';

export const HomeContainer = styled.SafeAreaView`
  height: 100%;
  background-color: #101823;
`;

export const AgentImage = styled.Image`
  width: 100%;
  height: 200px;
  max-width: 50%;
  align-self: center;
  margin-top: 25px;
`;

export const AgentName = styled.Text`
  font-family: 'valorant';
  font-size: 35px;
  color: white;
  align-self: center;
  margin: 25px 0px;
`;

export const HabilityContainer = styled.View`
  background-color: #cecece;
  margin: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HabilityTitle = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const HabilityDescription = styled.Text`
  text-align: center;
  margin: 0 4px;
`;

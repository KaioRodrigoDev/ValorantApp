import React, {useCallback} from 'react';
import * as S from './style';
import {AgentProps} from '@Types/agents';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

const AgentCard = ({agente}: AgentProps) => {
  const {navigate} = useNavigation();

  const handlePress = useCallback(() => {
    console.log('click');
  }, [navigate]);

  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 3,
      }}>
      <S.AgentContainer onPress={handlePress}>
        <S.AgentImage source={{uri: agente.displayIconSmall}} />
        <S.AgentText>
          <S.AgentTitle>{agente.displayName}</S.AgentTitle>
          <S.AgentDescription>{agente.description}</S.AgentDescription>
        </S.AgentText>
      </S.AgentContainer>
    </DropShadow>
  );
};

export default AgentCard;

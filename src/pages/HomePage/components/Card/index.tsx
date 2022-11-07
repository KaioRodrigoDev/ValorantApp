import React, {useCallback} from 'react';
import * as S from './style';
import {AgentProps} from '@Types/agents';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

const AgentCard = ({agente}: AgentProps) => {
  const {navigate} = useNavigation();

  console.log(agente);

  const handlePress = useCallback(() => {
    navigate('Agente', {
      params: {
        uuid: agente.uuid,
      },
    });
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
      <S.Container onPress={handlePress} key={agente.uuid}>
        <S.AgentImage source={{uri: agente.displayIconSmall}} />
        <S.AgentAreaText>
          <S.AgentTitle>{agente.displayName}</S.AgentTitle>
          <S.AgentDescription>{agente.role.displayName}</S.AgentDescription>
          <S.AbilityContainer>
            {agente.abilities.map(
              ability =>
                ability.displayIcon && (
                  <S.IconImage source={{uri: ability.displayIcon}} />
                ),
            )}
          </S.AbilityContainer>
        </S.AgentAreaText>
      </S.Container>
    </DropShadow>
  );
};

export default AgentCard;

import React, {useCallback} from 'react';
import * as S from './style';
import {AbilitiesProps, CardAgentProps} from '@Types/agents';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';
import {AppParamList} from '@Types/routes/app';
import {StackNavigationProp} from '@react-navigation/stack';

const AgentCard = ({agente}: CardAgentProps) => {
  const {navigate} =
    useNavigation<StackNavigationProp<AppParamList, 'Agente'>>();

  console.log(agente);

  const handlePress = useCallback(() => {
    navigate('Agente', {
      params: {
        uuid: agente.uuid,
      },
    });
    console.log('click');
  }, [agente, navigate]);

  return (
    <DropShadow
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }}>
      <S.AgentContainer onPress={handlePress}>
        <S.Container key={agente.uuid}>
          <S.AgentImage source={{uri: agente.displayIconSmall}} />
          <S.AgentAreaText>
            <S.AgentTitle>{agente.displayName}</S.AgentTitle>
            <S.AgentDescription>{agente.role.displayName}</S.AgentDescription>
            <S.AbilityContainer>
              {agente.abilities.map(
                (ability: AbilitiesProps) =>
                  ability.displayIcon && (
                    <S.IconImage source={{uri: ability.displayIcon}} />
                  ),
              )}
            </S.AbilityContainer>
          </S.AgentAreaText>
        </S.Container>
      </S.AgentContainer>
    </DropShadow>
  );
};

export default AgentCard;

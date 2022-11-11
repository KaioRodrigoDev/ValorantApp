/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {ActivityIndicator} from 'react-native';

import {ScrollView} from 'react-native';

import * as S from './style';

import API_SERVICE from '@Api/api';
import AbilityCard from './components/ability';
import {AgentProps} from '@Types/agents';

const AgentPage = ({route}: any) => {
  const [agente, setAgente] = useState<AgentProps>();
  let id = route.params.params.uuid;
  useEffect(() => {
    API_SERVICE.get(id).then(response => {
      setAgente(response.data.data);
      console.log(response.data);
    });
  }, [id]);

  if (!agente) {
    return (
      <S.HomeContainer>
        <ActivityIndicator size="large" />
      </S.HomeContainer>
    );
  }

  return (
    <S.HomeContainer>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <S.AgentImage source={{uri: agente.displayIconSmall}} />
        <S.AgentName>{agente.displayName}</S.AgentName>
        {agente.abilities.map(ability => (
          <AbilityCard abilities={ability} />
        ))}
      </ScrollView>
    </S.HomeContainer>
  );
};

export default AgentPage;

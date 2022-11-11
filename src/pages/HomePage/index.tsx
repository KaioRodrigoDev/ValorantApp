/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';

import API_SERVICE from '@Api/api';
import AgentCard from './components/Card';
import {AgentListProps} from '@Types/server-response';

import Valorant from '../../assets/img/Valorant.png';

import * as S from './style';

const HomePage = () => {
  const [agentes, setAgentes] = useState<AgentListProps>();

  useEffect(() => {
    API_SERVICE.get().then(response => {
      setAgentes(response.data);
      console.log(response.data);
    });
  }, []);

  if (!agentes) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <S.HomeContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.HomeImage source={Valorant} />
        <S.HomeTitle>Escolha seu agente</S.HomeTitle>
        {agentes.data.map(agente => (
          <AgentCard agente={agente} />
        ))}
      </ScrollView>
    </S.HomeContainer>
  );
};

export default HomePage;

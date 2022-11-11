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

import DropShadow from 'react-native-drop-shadow';

import {ScrollView, Text, SafeAreaView, Image, View} from 'react-native';

import * as S from './style';

import API_SERVICE from '@Api/api';

const AgentPage = ({route}) => {
  const [agente, setAgente] = useState();
  let id = route.params.params.uuid;
  useEffect(() => {
    API_SERVICE.get(id).then(response => {
      setAgente(response.data.data);
      console.log(response.data);
    });
  }, [id]);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <S.AgentImage source={{uri: agente?.fullPortrait}} />
        <Text>{agente?.displayName}</Text>
        {agente?.abilities?.map(hability => (
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
            <S.HabilityContainer>
              <Image
                source={{uri: hability.displayIcon}}
                style={{height: 100, width: 100}}
              />
              <S.HabilityTitle>{hability.displayName}</S.HabilityTitle>

              <S.HabilityDescription>
                {hability.description}
              </S.HabilityDescription>
            </S.HabilityContainer>
          </DropShadow>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgentPage;

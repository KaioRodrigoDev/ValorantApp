import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AppParamList} from '@Types/routes/app';
import HomePage from '@Pages/HomePage';
import AgentPage from '@Pages/AgentPage';

const Stack = createStackNavigator<AppParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Agente" component={AgentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen.container';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Orderbook" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

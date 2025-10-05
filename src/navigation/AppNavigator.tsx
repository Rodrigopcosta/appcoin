import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  CoinDetails: { coinId: string }; // ID para a tela de detalhes
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
        contentStyle: {
          backgroundColor: '#121212',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Minha Coleção' }}
      />
      <Stack.Screen
        name="CoinDetails"
        component={CoinDetailsScreen}
        options={{ title: 'Detalhes da Moeda' }}
      />
    </Stack.Navigator>
  );
}
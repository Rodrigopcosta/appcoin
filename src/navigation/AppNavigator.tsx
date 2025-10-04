import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Importe as telas do MVP
import HomeScreen from '../screens/HomeScreen';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';// Vamos criar essa tela em breve

// 2. Crie a interface para tipagem (melhor prática com TypeScript)
export type RootStackParamList = {
  Home: undefined; // Não precisa de parâmetros iniciais
  CoinDetails: { coinId: string }; // Precisará do ID da moeda
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212', // Fundo do Header (dark mode)
        },
        headerTintColor: '#fff', // Cor do texto/ícones do Header
        contentStyle: {
          backgroundColor: '#121212', // Fundo das telas (fallback)
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Minha Coleção' }} // Título do MVP
      />
      <Stack.Screen
        name="CoinDetails"
        component={CoinDetailsScreen}
        options={{ title: 'Detalhes da Moeda' }}
      />
    </Stack.Navigator>
  );
}
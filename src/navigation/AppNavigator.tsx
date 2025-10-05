import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

// Importa Telas (REAIS)
import HomeScreen from '../screens/HomeScreen';
import CoinListScreen from '../screens/CoinListScreen';
import CollectionListScreen from '../screens/CollectionListScreen';
import MenuScreen from '../screens/MenuScreen';
// CORREÇÃO 1: Importa o componente real da tela de Transações
import TransactionsScreen from '../screens/TransactionsScreen';
// CORREÇÃO 1: Importa o componente real da tela de Câmera (mantido como mock por agora, mas a estrutura de importação é a correta)


// Importa Componentes e Tipos
import CustomTabBarButton from './CustomTabBarButton';
// Assumindo que você tem TabStackParamList e CollectionStackParamList definidos
import { TabStackParamList, CollectionStackParamList } from '../utils/types';


// Telas Mock (Para preencher as abas) - APENAS AS QUE AINDA SÃO MOCK VÃO FICAR
const CameraScreenMock = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
    <Text style={{ color: '#00bcd4', fontSize: 20 }}>Câmera / Identificação de Moeda</Text>
  </View>
);
// Os Mocks de TransactionsScreen e MenuScreen foram removidos pois importamos os reais acima.


// --- 3. Navigators ---
const Tab = createBottomTabNavigator<TabStackParamList>();
const CollectionStack = createNativeStackNavigator<CollectionStackParamList>();

// Stack do Fluxo de Coleções
function ColecoesStack() {
  return (
    <CollectionStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#121212' },
      }}
      initialRouteName="CollectionList"
    >
      <CollectionStack.Screen
        name="CollectionList"
        component={CollectionListScreen}
      />
      <CollectionStack.Screen
        name="CoinListScreen"
        component={CoinListScreen}
      />
      {/* Você deve criar CoinDetailsScreen */}
      {/* <CollectionStack.Screen name="CoinDetails" component={CoinDetailsScreen} /> */}
    </CollectionStack.Navigator>
  );
}


// Tab Bar Principal
export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: '#00bcd4',
        tabBarInactiveTintColor: '#aaa',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1e1e1e',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="home-outline" color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Transacoes"
        component={TransactionsScreen} // CORREÇÃO 2: Usa o componente real importado
        options={{
          tabBarLabel: 'Transações',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="swap-horizontal-outline" color={color} size={24} />,
        }}
      />

      {/* --- BOTÃO FLUTUANTE CENTRAL (CAMERA) --- */}
      <Tab.Screen
        name="Camera"
        component={CameraScreenMock} // Mantendo o MOCK da Câmera por enquanto
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <View />,
          tabBarButton: (props) => {
            // Usa 'as any' para resolver o erro 2339 (apenas para este componente de botão)
            const { navigation } = props as any;
            return (
              <CustomTabBarButton
                {...props}
                onPress={() => navigation.navigate('Camera')}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="ColecoesStack"
        component={ColecoesStack}
        options={{
          tabBarLabel: 'Coleções',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="albums-outline" color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Menu"
        component={MenuScreen} // CORREÇÃO 2: Usa o componente real importado
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="menu-outline" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}
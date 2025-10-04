import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Tipagem para receber parâmetros da navegação (importamos do AppNavigator)
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

// Define a tipagem específica para a rota CoinDetails
type CoinDetailsRouteProp = RouteProp<RootStackParamList, 'CoinDetails'>;

interface Props {
  route: CoinDetailsRouteProp;
}

export default function CoinDetailsScreen({ route }: Props) {
  // Você pode descomentar esta linha no futuro para ver o ID da moeda
  // const { coinId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Detalhes da Moeda</Text>
      <Text style={styles.text}>Próxima Etapa: Implementação do Detalhe</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
  },
});
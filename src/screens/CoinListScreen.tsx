import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Este componente é um placeholder. Ele resolve o erro 2307.
// O conteúdo real será implementado em breve.

export default function CoinListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✅ Módulo encontrado!</Text>
      <Text style={styles.text}>Tela da Lista de Moedas (CoinListScreen)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 5,
    }
});
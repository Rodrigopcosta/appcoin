import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import axios from 'axios'; 
import { Coin } from '../utils/data';

// REMOVIDO: A importação de tipo AxiosResponse (para evitar o erro 2694)

// URL base da API hospedada no Render
const BASE_API_URL = 'https://appcoin-api.onrender.com/api/v1/coins';

// Define os parâmetros esperados da rota
type CoinDetailsRouteProp = RouteProp<{ CoinDetails: { coinId: string } }, 'CoinDetails'>;

export default function CoinDetailsScreen() {
  const route = useRoute<CoinDetailsRouteProp>();
  const { coinId } = route.params;

  const [coin, setCoin] = useState<Coin | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoinDetails = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Usamos axios.get<T>() para inferir o tipo, esperando um objeto Coin
      const response = await axios.get<Coin>(`${BASE_API_URL}/${coinId}`);
      
      // response.data é do tipo Coin, sem a necessidade de mapeamento complexo
      const fetchedCoin: Coin = {
        id: String(response.data.id), 
        name: response.data.name,
        theme: response.data.theme,
        image_url: response.data.image_url,
        hasCoin: false, // Status inicial/padrão
      };

      setCoin(fetchedCoin);
    } catch (e) {
      console.error("Erro ao carregar detalhes:", e);
      setError("Falha ao conectar com a API ou moeda não encontrada.");
      setCoin(null);
    } finally {
      setLoading(false);
    }
  }, [coinId]);

  useEffect(() => {
    fetchCoinDetails();
  }, [fetchCoinDetails]);
  
  // ----------------------------------------------------
  // Renderização condicional
  // ----------------------------------------------------
  
  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#00bcd4" />
        <Text style={styles.loadingText}>Carregando detalhes da moeda...</Text>
      </View>
    );
  }

  if (error || !coin) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.errorText}>ERRO: Detalhes da Moeda</Text>
        <Text style={styles.errorText}>{error || "Moeda não encontrada."}</Text>
        <Text style={styles.subtitle} onPress={fetchCoinDetails}>Toque para Recarregar</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{coin.name}</Text>
      <Text style={styles.subtitle}>Tema: {coin.theme}</Text>
      
      <Image 
        source={{ uri: coin.image_url }} 
        style={styles.image} 
        resizeMode="contain" 
      />
      
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Status de Coleção: {coin.hasCoin ? 'TENHO' : 'FALTA'}
        </Text>
        {/* Este botão será expandido na fase 2 para atualizar o MongoDB */}
        <TouchableOpacity style={styles.toggleButton}>
             <Text style={styles.toggleButtonText}>
                {coin.hasCoin ? 'Marcar como FALTA' : 'Marcar como TENHO'}
             </Text>
        </TouchableOpacity>
      </View>
      
      {/* Adicione aqui mais detalhes se sua API retornar, como descrição, ano, etc. */}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    color: '#aaa',
    marginTop: 10,
    fontSize: 16,
  },
  errorText: {
    color: '#FF5733',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#00bcd4',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor: '#333',
  },
  statusContainer: {
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: '#00bcd4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
  },
  toggleButtonText: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  }
});
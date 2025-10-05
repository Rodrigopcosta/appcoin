import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import axios from 'axios'; 
import { Coin } from '../utils/data';
import CoinListItem from '../components/CoinListItem';

// URL base da API hospedada no Render
const BASE_API_URL = 'https://appcoin-api.onrender.com/api/v1/coins';

// CORREÇÃO FINAL: A API retorna um objeto com as chaves "items" e "pagination".
interface CoinListResponse {
  items: Coin[]; // O array de moedas está na chave 'items'
  pagination: {
    current_page: number;
    per_page: number;
    total_items: number;
    total_pages: number;
  };
}

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  // Estados para gerenciar os dados, carregamento e erros
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCoins, setTotalCoins] = useState(17); // Padrão 17, atualizado pela API

  // Função para carregar os dados da API
  const fetchCoins = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Usamos axios.get<T>() para inferir o tipo
      const response = await axios.get<CoinListResponse>(BASE_API_URL);
      
      // CORREÇÃO FINAL: Usamos response.data.items.map(...)
      const fetchedCoins: Coin[] = response.data.items.map((coin: any) => ({
        id: String(coin.id),
        name: coin.name,
        // MAPEAMENTO: Mapeia imageUri da API para image_url do seu componente
        theme: coin.theme,
        image_url: coin.imageUri, 
        
        // Inicializa o status de coleção como false (falta a moeda)
        hasCoin: false, 
      }));

      setCoins(fetchedCoins);
      // Captura o total de moedas da paginação
      setTotalCoins(response.data.pagination.total_items);
      
    } catch (e) {
      console.error("Erro ao carregar moedas:", e);
      setError("Falha ao conectar com a API do Render.");
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  // Função para alternar o status 'Tenho/Falta' (ainda em memória)
  const toggleCoinStatus = (id: string) => {
    setCoins(prevCoins =>
      prevCoins.map(coin =>
        coin.id === id ? { ...coin, hasCoin: !coin.hasCoin } : coin
      )
    );
  };
  
  // Calcula o progresso
  const ownedCount = coins.filter(c => c.hasCoin).length;
  
  const renderItem = ({ item }: { item: Coin }) => (
    <CoinListItem 
      coin={item} 
      onPress={() => navigation.navigate('CoinDetails', { coinId: item.id })} 
      onToggleStatus={() => toggleCoinStatus(item.id)}
    />
  );
  
  // ----------------------------------------------------
  // Renderização condicional
  // ----------------------------------------------------
  
  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#00bcd4" />
        <Text style={styles.loadingText}>Carregando dados da API...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.errorText}>ERRO:</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.subtitle} onPress={fetchCoins}>Toque para Recarregar</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minha Coleção</Text>
        <Text style={styles.subtitle}>Olimpíadas Rio 2016 ({ownedCount}/{totalCoins})</Text>
      </View>

      <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
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
  header: {
    padding: 16,
    paddingTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 4,
  },
  listContent: {
    paddingHorizontal: 8, 
    paddingBottom: 20, 
  },
  row: {
    justifyContent: 'flex-start',
  }
});
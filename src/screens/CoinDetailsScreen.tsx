import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Importa os itens refatorados
import { styles } from './styles/CoinListScreenStyles';
import { useCoinList } from '../hooks/useCoinList';

// Importa os tipos e componentes
import { Coin, CollectionStackParamList } from '../utils/types';
import CoinListItem from '../components/CoinListItem';

// Tipos de navegação e rota
type CoinListNavigationProp = StackNavigationProp<CollectionStackParamList, 'CoinListScreen'>;
type CoinListRouteProp = RouteProp<CollectionStackParamList, 'CoinListScreen'>;

export default function CoinListScreen() {
    const navigation = useNavigation<CoinListNavigationProp>();
    const route = useRoute<CoinListRouteProp>();

    // Pega o nome da coleção para exibir no cabeçalho. Usa um fallback seguro.
    const { collectionName } = route.params || { collectionName: 'Coleção Desconhecida' };

    // --- USO DO CUSTOM HOOK (Toda a lógica está aqui) ---
    const { 
        coins, 
        loading, 
        error, 
        totalCoins, 
        ownedCount, 
        fetchCoins, 
        toggleCoinStatus 
    } = useCoinList();
    // ---------------------------------------------------

    const renderItem = ({ item }: { item: Coin }) => (
        <CoinListItem 
            coin={item} 
            onPress={() => navigation.navigate('CoinDetails', { coinId: item.id })} 
            onToggleStatus={() => toggleCoinStatus(item.id)}
        />
    );

    // --- Renderização de Loading e Erro ---
    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#00bcd4" />
                <Text style={styles.loadingText}>Carregando moedas de {collectionName}...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <Text style={styles.errorText}>ERRO:</Text>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity onPress={fetchCoins}>
                    {/* CORREÇÃO DO ERRO Text strings must be rendered within a <Text> component. */}
                    <Text style={styles.subtitle}>Toque para Recarregar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // --- Renderização Principal ---
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            <View style={styles.header}>
                {/* Botão Voltar/Voltar para Coleção */}
                <TouchableOpacity 
                    style={styles.headerBack} 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back-outline" size={24} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.title}>{collectionName}</Text>
                <Text style={styles.subtitle}>Progresso: ({ownedCount}/{totalCoins})</Text>
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
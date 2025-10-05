import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles/CollectionListScreenStyles';
import { BRAZILIAN_COLLECTIONS, Collection } from '../utils/data';

// --- Componente do Card de Coleção Individual ---
const CollectionCard: React.FC<{ collection: Collection }> = ({ collection }) => {
    // Calcula o progresso em porcentagem
    const progress = (collection.coinCount / collection.totalCoins) * 100;
    // Garante que o progresso não passe de 100% ou seja negativo
    const sanitizedProgress = Math.min(100, Math.max(0, progress));

    return (
        <TouchableOpacity 
            style={styles.collectionCard} 
            onPress={() => Alert.alert('Ver Coleção', `Você clicou em: ${collection.name}`)}
            activeOpacity={0.8}
        >
            {/* Ícone com cor da coleção */}
            <View style={[styles.iconContainer, { backgroundColor: collection.color + '30' }]}> 
                <MaterialCommunityIcons name={collection.iconName as any} size={28} color={collection.color} />
            </View>

            <View style={styles.textContainer}>
                {/* Nome e Descrição da Coleção */}
                <Text style={styles.collectionName}>{collection.name}</Text>
                <Text style={styles.collectionDescription}>{collection.description}</Text>

                {/* Progresso de Coleção */}
                <Text style={styles.progressText}>
                    Progresso: {collection.coinCount} de {collection.totalCoins} ({sanitizedProgress.toFixed(0)}%)
                </Text>
                
                {/* Barra de Progresso */}
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBarFill, { width: `${sanitizedProgress}%`, backgroundColor: collection.color }]} />
                </View>
            </View>
             {/* Seta para indicar que o card é clicável */}
            <Ionicons name="chevron-forward" size={24} color="#B0B0B0" /> 
        </TouchableOpacity>
    );
};


// --- Tela Principal da Lista de Coleções ---
export default function CollectionListScreen() {
    // A navigation não está sendo usada aqui, mas é mantida por boa prática
    const navigation = useNavigation();

    const handleAddCollection = () => {
        Alert.alert("Adicionar Coleção", "Funcionalidade para criar uma coleção personalizada.");
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Minhas Coleções</Text>
                <TouchableOpacity onPress={handleAddCollection} style={styles.addButton}>
                    <Ionicons name="add-circle" size={32} color="#00bcd4" />
                </TouchableOpacity>
            </View>

            {/* Lista de Coleções */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {BRAZILIAN_COLLECTIONS.map(collection => (
                    <CollectionCard key={collection.id} collection={collection} />
                ))}
            </ScrollView>
        </View>
    );
}

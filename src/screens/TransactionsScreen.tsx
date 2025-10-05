import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles/TransactionsScreenStyles';

// --- MOCK DATA ---
const MOCK_LISTINGS = [
    { id: '1', name: '1 Real Olimpíadas - Atletismo', condition: 'FC', type: 'Venda', price: 15.00, seller: 'Numi_RJ', rating: 4.8 },
    { id: '2', name: '50 Centavos - Ano 1998', condition: 'Soberba', type: 'Troca', wanted: '1 Real 2012 Bandeira', seller: 'ColecionadorSP', rating: 5.0 },
    { id: '3', name: 'Moeda com Erro (Giro Invertido)', condition: 'MBC', type: 'Venda', price: 80.00, seller: 'RaridadesBR', rating: 4.2 },
];

const MOCK_WISHLIST = [
    { id: 'w1', name: 'Moeda 1 Real BC 50 Anos', available: 3 },
    { id: 'w2', name: '10 Centavos 1999 (Rara)', available: 0 },
    { id: 'w3', name: 'Conjunto Série Fauna', available: 1 },
];

const MOCK_REVIEWS = [
    { id: 'r1', reviewer: 'Pedro Trocas', rating: 5, text: 'Vendedor rápido e a moeda veio conforme o anúncio. Recomendo!' },
    { id: 'r2', reviewer: 'Ana Coleções', rating: 4, text: 'A troca foi tranquila, mas a comunicação demorou um pouco.' },
];
// --- FIM MOCK DATA ---


// --- Componentes ---

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <View style={styles.starRating}>
            {[...Array(fullStars)].map((_, i) => <Ionicons key={`f${i}`} name="star" size={20} color="#FFC107" />)}
            {hasHalfStar && <Ionicons name="star-half" size={20} color="#FFC107" />}
            {[...Array(emptyStars)].map((_, i) => <Ionicons key={`e${i}`} name="star-outline" size={20} color="#FFC107" />)}
        </View>
    );
};

// --- Tabs de Conteúdo ---

const AnunciosTab = () => (
    <View style={styles.tabContent}>
        <TextInput
            style={styles.searchBar}
            placeholder="Buscar moeda, vendedor ou valor..."
            placeholderTextColor="#555555"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            {MOCK_LISTINGS.map(item => (
                <TouchableOpacity key={item.id} style={styles.listingCard} onPress={() => Alert.alert("Detalhes", `Ver anúncio de ${item.name}`)}>
                    <View style={styles.coinImage} />
                    <View style={styles.listingDetails}>
                        <Text style={styles.coinName}>{item.name}</Text>

                        {item.type === 'Venda' && item.price !== undefined ? (
                            <Text style={styles.priceTag}>R$ {item.price.toFixed(2)}</Text>
                        ) : (
                            <Text style={styles.exchangeTag}>Troca por: {item.wanted}</Text>
                        )}

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                            <Text style={styles.sellerInfo}>Vendedor: {item.seller} </Text>
                            <StarRating rating={item.rating} />
                        </View>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="#B0B0B0" />
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={[styles.listingCard, { justifyContent: 'center', backgroundColor: '#00bcd430', borderWidth: 1, borderColor: '#00bcd4' }]}
                onPress={() => Alert.alert("Novo Anúncio", "Tela para criar um novo anúncio de venda ou troca.")}
            >
                <Ionicons name="add-circle-outline" size={24} color="#00bcd4" />
                <Text style={[styles.coinName, { color: '#00bcd4', marginLeft: 10 }]}>Criar Novo Anúncio</Text>
            </TouchableOpacity>
            <View style={{ height: 50 }} />
        </ScrollView>
    </View>
);

const DesejosTab = () => (
    <View style={styles.tabContent}>
        <Text style={[styles.sellerInfo, { marginBottom: 15, color: '#FF9800' }]}>
            Marque moedas que você quer para receber notificações quando forem anunciadas!
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {MOCK_WISHLIST.map(item => (
                <TouchableOpacity key={item.id} style={styles.wishlistItem} onPress={() => Alert.alert("Desejo", `Gerenciar notificações para ${item.name}`)}>
                    <Text style={styles.wishlistText}>{item.name}</Text>
                    {item.available > 0 && (
                        <View style={styles.wishlistBadge}>
                            <Text style={styles.wishlistBadgeText}>{item.available} NOVO(S)</Text>
                        </View>
                    )}
                    <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
                </TouchableOpacity>
            ))}
            <View style={{ height: 50 }} />
        </ScrollView>
    </View>
);

const AvaliacoesTab = () => {
    // Calcula a média de todas as reviews mock (4.8 + 5.0 + 4.2) / 3 = 4.67 (Aproximadamente)
    const averageRating = 4.67;
    const totalReviews = MOCK_REVIEWS.length + MOCK_LISTINGS.length; // Simulando mais dados

    return (
        <View style={styles.tabContent}>
            <View style={styles.ratingContainer}>
                <Text style={styles.scoreText}>{averageRating.toFixed(2)}</Text>
                <StarRating rating={averageRating} />
                <Text style={styles.totalReviews}>{totalReviews} Avaliações e Transações</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {MOCK_REVIEWS.map(review => (
                    <View key={review.id} style={styles.reviewCard}>
                        <View style={styles.reviewerInfo}>
                            <Ionicons name="person-circle" size={24} color="#00bcd4" />
                            <Text style={styles.reviewerName}>{review.reviewer}</Text>
                        </View>
                        <StarRating rating={review.rating} />
                        <Text style={styles.reviewText}>{review.text}</Text>
                    </View>
                ))}
                <View style={{ height: 50 }} />
            </ScrollView>
        </View>
    );
};


// --- Tela Principal de Transações ---
export default function TransactionsScreen() {
    const [activeTab, setActiveTab] = useState('Anúncios');

    const renderContent = () => {
        switch (activeTab) {
            case 'Anúncios':
                return <AnunciosTab />;
            case 'Lista de Desejos':
                return <DesejosTab />;
            case 'Avaliações':
                return <AvaliacoesTab />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mercado de Moedas</Text>
            </View>

            {/* BARRA DE NAVEGAÇÃO DE TABS */}
            <View style={styles.tabBar}>
                {['Anúncios', 'Lista de Desejos', 'Avaliações'].map(tab => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* CONTEÚDO DA TAB SELECIONADA */}
            {renderContent()}
        </View>
    );
}
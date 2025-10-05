import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 50, // Espaço para StatusBar e Cabeçalho
    },
    header: {
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#1E1E1E',
        marginHorizontal: 16,
        borderRadius: 8,
        marginBottom: 10,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    tabButtonActive: {
        borderBottomColor: '#00bcd4', // Cor ativa ciano
    },
    tabText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#B0B0B0',
    },
    tabTextActive: {
        color: '#FFFFFF',
    },
    tabContent: {
        flex: 1,
        paddingHorizontal: 16,
    },
    // --- Estilos da Tab ANÚNCIOS ---
    searchBar: {
        height: 45,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: '#FFFFFF',
        marginBottom: 15,
    },
    listingCard: {
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#333333',
        marginRight: 15,
    },
    listingDetails: {
        flex: 1,
    },
    coinName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    priceTag: {
        fontSize: 14,
        color: '#4CAF50', // Verde para Venda
        fontWeight: '600',
        marginTop: 4,
    },
    exchangeTag: {
        fontSize: 14,
        color: '#FF9800', // Laranja para Troca
        fontWeight: '600',
        marginTop: 4,
    },
    sellerInfo: {
        fontSize: 12,
        color: '#B0B0B0',
        marginTop: 4,
    },
    // --- Estilos da Tab DESEJOS ---
    wishlistItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#1E1E1E',
    },
    wishlistText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    wishlistBadge: {
        backgroundColor: '#F44336', // Vermelho para alerta
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 15,
    },
    wishlistBadgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    // --- Estilos da Tab AVALIAÇÕES ---
    ratingContainer: {
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    starRating: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    scoreText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFC107', // Amarelo para nota
        marginBottom: 5,
    },
    totalReviews: {
        fontSize: 14,
        color: '#B0B0B0',
    },
    reviewCard: {
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    reviewerName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 8,
    },
    reviewText: {
        fontSize: 14,
        color: '#B0B0B0',
    },
});
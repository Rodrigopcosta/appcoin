import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scrollContent: {
        paddingTop: 30, // Espaço após o header fixo
        paddingBottom: 120, // Espaço para a Tab Bar
        alignItems: 'center',
    },
    // --- Cabeçalho (Fixo no Topo) ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 45, // Para compensar a barra de status
        borderBottomWidth: 1,
        borderBottomColor: '#1e1e1e',
        backgroundColor: '#121212',
        width: '100%',
        zIndex: 10, // Garante que o header fique acima do conteúdo
    },
    logoText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#fff',
    },
    searchButton: {
        padding: 5,
    },
    // --- Display da Moeda e Botão de Identificação ---
    coinDisplay: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 30, 
    },
    coinImage: {
        width: width * 0.65, // 65% da largura da tela
        height: width * 0.65,
        borderRadius: (width * 0.65) / 2,
        backgroundColor: '#1e1e1e', 
        borderWidth: 4,
        borderColor: '#00bcd4', 
    },
    coinImageText: {
        marginTop: 20,
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
    identifyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00bcd4',
        paddingVertical: 18,
        paddingHorizontal: 30,
        borderRadius: 12,
        width: '90%',
        justifyContent: 'center',
        // Efeito de sombra leve
        shadowColor: '#00bcd4',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        marginBottom: 40, 
    },
    identifyButtonText: {
        color: '#121212',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    // --- Seção Premium Card ---
    premiumCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2a2a2a', // Fundo escuro coeso
        padding: 15,
        borderRadius: 12,
        width: '90%',
        marginBottom: 40,
        borderLeftWidth: 5,
        borderLeftColor: '#00bcd4', // Ciano primário (destaque integrado)
        elevation: 5,
        shadowColor: '#00bcd4', // Sombra sutil ciano
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    premiumTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    premiumTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00bcd4', // Título em Ciano primário
    },
    premiumCta: {
        fontSize: 13,
        fontWeight: '600',
        color: '#fff', // Texto CTA em branco para máximo destaque
        marginTop: 4,
    },
    premiumIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // --- Seção: Cards de Informação (AGORA TÓPICOS SOLTOS) ---
    infoSectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
    },
    infoCard: {
        // Removendo background e margens laterais para parecer "solto"
        width: '90%',
        paddingVertical: 15, // Espaçamento vertical entre os tópicos
        borderBottomWidth: 1, // Linha divisória sutil
        borderBottomColor: '#1e1e1e', 
        alignItems: 'flex-start',
    },
    infoContent: {
        flex: 1,
    },
    // CORRIGIDO: Título agora é branco
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff', 
        marginBottom: 5,
    },
    // REMOVIDO: infoImage (não é mais necessário)
    // REMOVIDO: infoImage: { ... }
    
    infoText: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 5,
    },
    infoExpand: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    infoExpandText: {
        fontSize: 12,
        color: '#00bcd4', 
        marginLeft: 5,
        fontWeight: 'bold',
    },
});
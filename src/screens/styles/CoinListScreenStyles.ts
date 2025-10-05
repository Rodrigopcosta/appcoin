import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
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
    header: {
        padding: 16,
        paddingTop: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#282828',
        alignItems: 'center', 
        position: 'relative', 
    },
    headerBack: {
        position: 'absolute',
        left: 10,
        top: 50,
        padding: 5,
        zIndex: 1, // Garante que o botão fique acima
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#aaa',
        marginTop: 4,
    },
    listContent: {
        paddingHorizontal: 8,
        paddingBottom: 120, // Aumentado para compensar a Tab Bar
    },
    row: {
        justifyContent: 'flex-start',
    }
});
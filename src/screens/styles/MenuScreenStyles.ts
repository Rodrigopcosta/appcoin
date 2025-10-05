import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    scrollView: {
        paddingHorizontal: 16,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B0B0B0', // Cinza claro para título de seção
        marginTop: 20,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#1E1E1E',
        paddingBottom: 4,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#1E1E1E', // Linha divisória sutil
    },
    menuItemText: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 15,
    },
    premiumBadge: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#121212',
        backgroundColor: '#00bcd4', // Ciano Premium
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
        marginLeft: 10,
    },
    versionText: {
        textAlign: 'center',
        color: '#555555',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 12,
    },
});
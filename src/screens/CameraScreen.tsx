import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CameraScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Câmera / Identificação de Moeda (Em Desenvolvimento)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    text: {
        color: '#00bcd4', 
        fontSize: 20,
    }
});

export default CameraScreen;
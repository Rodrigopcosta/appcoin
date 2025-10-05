import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

interface CustomButtonProps extends BottomTabBarButtonProps {
  onPress: () => void;
}

const CustomTabBarButton: React.FC<CustomButtonProps> = ({ onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name="camera" size={30} color="#121212" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    top: -20, // Move o botão 20px para cima
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#00bcd4', // Cor de destaque
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra para dar a impressão de flutuação
    shadowColor: '#00bcd4',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default CustomTabBarButton;

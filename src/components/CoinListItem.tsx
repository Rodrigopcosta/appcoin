import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Coin } from '../utils/data';

const { width } = Dimensions.get('window');
const ITEM_SIZE = (width - 48) / 3; // 3 colunas com margens

interface CoinItemProps {
  coin: Coin;
  // onpress original era para navegação, mas você mudou na HomeScreen
  onPress: () => void; 
  onToggleStatus: () => void;
}

export default function CoinListItem({ coin, onPress, onToggleStatus }: CoinItemProps) {
  // Define a opacidade: 1.0 se tiver a moeda, 0.4 se faltar
  const itemOpacity = coin.hasCoin ? 1.0 : 0.4;
  
  // A ação principal é alternar o status (como definido na HomeScreen)
  return (
    <TouchableOpacity 
      style={[styles.container, { opacity: itemOpacity }]}
      onPress={onToggleStatus} 
      // Se pressionarmos o texto ou a imagem, navegamos para os detalhes
      onLongPress={onPress} 
      activeOpacity={0.7}
    >
      
      {/* Imagem real da Moeda (vindo da API) */}
      <Image 
        style={styles.image} 
        source={{ 
          uri: coin.image_url,
        }}
        // Placeholder simples caso a imagem não carregue
        defaultSource={{ uri: 'https://placehold.co/100x100/333/fff?text=NO+IMG' }}
      />

      {/* Nome da moeda */}
      <Text style={styles.name} numberOfLines={2}>{coin.name}</Text>
      
      {/* Indicador de status */}
      <View style={[styles.statusIndicator, { 
        backgroundColor: coin.hasCoin ? '#4CAF50' : '#E53935'
      }]}>
        <Text style={styles.statusText}>{coin.hasCoin ? 'TENHO' : 'FALTA'}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#282828',
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 8,
    elevation: 3,
  },
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    resizeMode: 'cover',
    borderBottomWidth: 1,
    borderBottomColor: '#121212',
  },
  name: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 4,
    height: 30, // Altura fixa para evitar pulo na lista
    paddingHorizontal: 4,
  },
  statusIndicator: {
    marginTop: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  }
});

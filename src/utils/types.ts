// Tipagem base para a moeda
export interface Coin {
  id: string;
  name: string;
  theme: string;
  image_url: string; // Imagem frontal (anverso)
  hasCoin: boolean;
}

// Interface de uma Coleção
export interface Collection {
  id: string;
  name: string;
  image_url: string; // Imagem de capa da coleção
  total_coins: number;
}

// DADOS MOCK: Algumas coleções populares do Plano Real
export const MOCK_COLLECTIONS: Collection[] = [
  { id: '1', name: 'Olimpíadas e Paralimpíadas Rio 2016', image_url: 'https://i.imgur.com/kS9Q2yA.png', total_coins: 17 },
  { id: '2', name: 'Bandeiras Olímpicas', image_url: 'https://i.imgur.com/gTqg8e1.png', total_coins: 1 }, // Moeda de 2012
  { id: '3', name: 'Comemorativas do Banco Central', image_url: 'https://i.imgur.com/j0j2P6x.png', total_coins: 7 }, 
  { id: '4', name: '25 Anos do Plano Real (2019)', image_url: 'https://i.imgur.com/lM5zZ40.png', total_coins: 1 },
];

// Tipagem para o Tab Navigator (Navegação Fixa)
export type TabStackParamList = {
  Inicio: undefined; 
  Transacoes: undefined;
  Camera: undefined; // Ponto de ancoragem para o botão central
  ColecoesStack: undefined;
  Menu: undefined;
};

// Tipagem para as telas de Coleções
export type CollectionStackParamList = {
  CollectionList: undefined; // Lista de todas as coleções (cards horizontais)
  // Requer ID e Nome
  CoinListScreen: { collectionId: string, collectionName: string }; 
  CoinDetails: { coinId: string }; // Detalhes da moeda
};

// Tipagem principal
export type RootStackParamList = {
  Tabs: undefined; // O App começa no Tab Navigator
  // Se houver telas fora do Tab Navigator, viriam aqui
};

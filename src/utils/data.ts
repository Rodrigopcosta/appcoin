// A interface Coin deve refletir a estrutura de dados retornada pela nossa API do Render
export interface Coin {
  id: string; // O ID é uma string na API (embora seja numérico, é serializado como string)
  name: string;
  theme: string;
  // A API agora retorna a URL da imagem.
  image_url: string; 
  
  // Propriedade de estado do usuário (ainda vamos integrar com MongoDB)
  hasCoin: boolean; 
}

// Removemos a lista MOCK_OLYMPICS_COINS.
// Este arquivo agora serve apenas para definir a estrutura (interface).

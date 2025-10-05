// Tipagem para as coleções
export interface Collection {
    id: string;
    name: string;
    description: string;
    iconName: string; // Nome do ícone MaterialCommunityIcons
    coinCount: number; // Número de moedas que o usuário tem (inicialmente 0)
    totalCoins: number; // Total de moedas que a coleção possui (para mock)
    color: string; // Cor primária do card
}

// Lista das 5 principais coleções brasileiras
export const BRAZILIAN_COLLECTIONS: Collection[] = [
    {
        id: 'real_comemorativas',
        name: 'Real Comemorativas (1994-Atual)',
        description: 'Moedas de 1 Real emitidas em tiragem especial (Olimpíadas, BC, 30 Anos do Real, etc.).',
        iconName: 'trophy',
        coinCount: 0,
        totalCoins: 35,
        color: '#00bcd4', // Ciano
    },
    {
        id: 'real_2a_familia',
        name: 'Real - 2ª Família (1998-Atual)',
        description: 'Moedas de circulação comum (1, 5, 10, 25, 50 centavos e 1 Real) após a mudança de design.',
        iconName: 'bank',
        coinCount: 0,
        totalCoins: 120,
        color: '#4CAF50', // Verde
    },
    {
        id: 'fauna_brasileira',
        name: 'Série Fauna Brasileira (1992-1994)',
        description: 'Moedas antigas do Cruzeiro/Cruzeiro Real com desenhos de animais nativos (Lobo-guará, Onça-pintada).',
        iconName: 'paw',
        coinCount: 0,
        totalCoins: 7,
        color: '#FF9800', // Laranja
    },
    {
        id: 'padroes_monetarios',
        name: 'Padrões Monetários Históricos',
        description: 'Moedas do Réis ao Cruzado (Império, Réis, Cruzeiro, etc.) para os colecionadores avançados.',
        iconName: 'gavel',
        coinCount: 0,
        totalCoins: 450,
        color: '#795548', // Marrom
    },
    {
        id: 'erros_cunhagem',
        name: 'Erros e Variantes Raras',
        description: 'Coleção de peças com falhas de cunhagem (Giro Invertido, Batida Dupla, Cunho Quebrado).',
        iconName: 'alert-octagon',
        coinCount: 0,
        totalCoins: 50,
        color: '#F44336', // Vermelho
    },
];

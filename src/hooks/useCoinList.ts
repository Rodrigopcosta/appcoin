import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Coin } from '../utils/types'; 

// URL base da API hospedada no Render
const BASE_API_URL = 'https://appcoin-api.onrender.com/api/v1/coins';

// Tipagem da Resposta da API
interface CoinListResponse {
    items: Coin[]; 
    pagination: {
        current_page: number;
        per_page: number;
        total_items: number;
        total_pages: number;
    };
}

export function useCoinList() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalCoins, setTotalCoins] = useState(0); 

    // Função para carregar os dados da API
    const fetchCoins = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<CoinListResponse>(BASE_API_URL);
            
            // --- CORREÇÃO DE ERRO: Verifica se 'items' existe e é um array ---
            if (!response.data || !Array.isArray(response.data.items)) {
                // Se a resposta vier com sucesso, mas o corpo estiver vazio ou com formato inesperado
                throw new Error("Formato de resposta da API inválido.");
            }
            
            const fetchedCoins: Coin[] = response.data.items.map((coin: any) => ({
                id: String(coin.id),
                name: coin.name,
                theme: coin.theme,
                image_url: coin.imageUri, // MAPEAMENTO: imageUri para image_url
                hasCoin: false, // Status inicial
            }));

            setCoins(fetchedCoins);
            setTotalCoins(response.data.pagination.total_items);
            
        } catch (e: any) {
            console.error("Erro ao carregar moedas:", e);
            
            let errorMessage = "Falha ao conectar com a API do Render.";
            if (e.message.includes('network') || e.code === 'ERR_NETWORK') {
                 errorMessage += " A API pode estar 'dormindo'. Tente recarregar ou visitar a URL diretamente.";
            } else if (e.message.includes('inválido')) {
                 errorMessage = e.message;
            }
            
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchCoins();
    }, [fetchCoins]);

    // Função para alternar o status 'Tenho/Falta' (simulação em memória)
    const toggleCoinStatus = (id: string) => {
        setCoins(prevCoins =>
            prevCoins.map(coin =>
                coin.id === id ? { ...coin, hasCoin: !coin.hasCoin } : coin
            )
        );
    };
    
    // Calcula o progresso
    const ownedCount = coins.filter(c => c.hasCoin).length;

    return {
        coins,
        loading,
        error,
        totalCoins,
        ownedCount,
        fetchCoins,
        toggleCoinStatus,
    };
}
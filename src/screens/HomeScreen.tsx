import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from './styles/HomeScreenStyles'; 
import { TabStackParamList } from '../utils/types'; // Importação do tipo necessária

type HomeNavigationProp = StackNavigationProp<TabStackParamList, 'Inicio'>;

const MOCK_COIN_IMAGE = 'https://i.imgur.com/L7p2Z1E.png'; 

// --- INTERFACE DE DADOS ---
interface InfoCardData {
    id: string;
    title: string;
    image: string;
    summary: string;
    fullText: string;
}

// --- DADOS MOCK PARA OS CARDS DE INFORMAÇÃO (TEXTOS EXPANDIDOS) ---
const INFO_CARDS: InfoCardData[] = [ 
    {
        id: '1',
        title: 'FLOR DE CUNHO (FC): Qualidade Máxima',
        image: '', 
        summary: 'Flor de Cunho é o nível mais alto de conservação, dado a moedas que saíram da cunhagem e nunca entraram em circulação. Isso significa que elas mantêm 100% do brilho original e não possuem nenhum desgaste ou arranhão visível a olho nu, sendo a prioridade máxima de qualquer colecionador. A sigla FC é o padrão universal para essa classificação. Entender o FC é o primeiro passo para avaliar a raridade e o valor de sua peça...',
        fullText: 'Para ser classificada como Flor de Cunho, a moeda deve ser examinada em detalhes. Pequenas marcas de contato inevitáveis durante o processo de ensacamento na Casa da Moeda (sacos de 1.000 moedas) são aceitas, mas qualquer sinal de manuseio ou atrito externo a desclassifica. O colecionador experiente busca a perfeição do relevo, a nitidez das bordas e, principalmente, o lustre (brilho) original, que desaparece rapidamente após o contato com o ar e a manipulação. Nosso sistema de IA ajuda a identificar esses detalhes cruciais.',
    },
    {
        id: '2',
        title: 'Preservação: Tipos de Qualidade Além do FC',
        image: '', 
        summary: 'O mundo da numismática possui uma escala detalhada para classificar moedas que circularam, mas que ainda estão em bom estado. As categorias mais comuns são: Soberba (S), que indica desgaste leve e retenção de cerca de 90% dos detalhes, e Muito Bem Conservada (MBC), que possui desgaste moderado, mas todos os detalhes principais visíveis. Estas classificações são cruciais para determinar o preço de mercado de qualquer peça...',
        fullText: 'A classificação correta de uma moeda impacta diretamente seu valor. Uma moeda Soberba (S) possui um desgaste quase imperceptível. Já a Muito Bem Conservada (MBC) mostra sinais claros de circulação, porém, os desenhos, lendas e datas ainda são perfeitamente legíveis. Abaixo delas temos a Bem Conservada (BC), onde a moeda sofreu desgaste intenso, e a Regular (R), onde a circulação praticamente apagou os detalhes. Dominar essa escala permite que você negocie e compre moedas com segurança, sabendo exatamente o que está adquirindo e vendendo.',
    },
    {
        id: '3',
        title: 'Erros de Cunhagem (Variantes Raras) e seus Mitos',
        image: '', 
        summary: 'Erros de cunhagem são peças que, por falha no processo de produção, apresentam anomalias únicas, tornando-as extremamente valiosas para os colecionadores. Estes não são defeitos comuns, mas sim variações notáveis, como moedas Bifaciais (com duas faces iguais), moedas com Giro Invertido (onde o verso está de cabeça para baixo em relação ao anverso), ou o famoso "Batida Dupla". Tais peças são raríssimas e procuradas, gerando picos de preço em leilões...',
        fullText: 'A Casa da Moeda tenta destruir todas as moedas com erros, mas algumas escapam, e essas são as que interessam. O "erro de cunhagem" mais conhecido hoje é o Reversão Horizontal ou Vertical. Outros erros incluem o "Disco Falhado" (onde o metal não preencheu totalmente o cunho), a "Moeda Cunhada em Metal Errado" (extremamente rara) e a "Cunhagem Descentrada". É importante saber diferenciar um erro autêntico de uma falsificação ou de um desgaste acidental. Nossa ferramenta de identificação utiliza IA para tentar detectar esses erros, poupando seu tempo de análise manual e garantindo a autenticidade.',
    },
    {
        id: '4',
        title: 'Sobre o App CoinApp: A Tecnologia por Trás da sua Coleção',
        image: '', 
        summary: 'O CoinApp não é apenas um catálogo; é uma plataforma que utiliza inteligência artificial de ponta para análise numismática. Nossa tecnologia de reconhecimento visual permite que você tire uma foto da sua moeda e receba instantaneamente a identificação do ano, do país de origem e, o mais importante, uma estimativa de conservação e valor de mercado baseada em bancos de dados atualizados. Organizamos sua coleção em nuvem, garantindo segurança e acessibilidade...',
        fullText: 'A missão do CoinApp é democratizar a numismática. Com a IA, reduzimos drasticamente o tempo que levaria para catalogar centenas de moedas manualmente. Além da identificação, o aplicativo oferece rastreamento de valor, permitindo que você acompanhe a valorização de suas coleções ao longo do tempo. O recurso Premium libera análises detalhadas e acesso a relatórios de leilões exclusivos, transformando o hobby em um investimento inteligente. Sua coleção, digitalizada, segura e sempre acessível, é o nosso principal objetivo. Fique de olho nas novas funcionalidades!',
    },
];

// --- Componente do Card de Informação (TÓPICO SOLTO) ---
const InfoCard: React.FC<{ card: InfoCardData }> = ({ card }) => { 
    // O texto inicial é o summary, mas se for expandido, mostra o fullText
    const [expanded, setExpanded] = useState(false);
    const textToShow = expanded ? card.fullText : card.summary;
    // Limita o resumo a 4 linhas
    const maxLines = expanded ? 0 : 4; 

    return (
        <View style={styles.infoCard}>
            <View style={styles.infoContent}>
                {/* Título do Tópico (Branco) */}
                <Text style={styles.infoTitle}>{card.title}</Text>
                
                {/* Conteúdo do Tópico (Limitado ou expandido) */}
                <Text style={styles.infoText} numberOfLines={maxLines}>
                    {textToShow}
                </Text>
                
                {/* Botão de Ver Mais/Menos */}
                <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.infoExpand}>
                    <Ionicons 
                        name={expanded ? "chevron-up" : "chevron-down"} 
                        size={14} 
                        color="#00bcd4" // Ciano
                    />
                    <Text style={styles.infoExpandText}>
                        {expanded ? 'Ver menos' : 'Ver mais'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default function HomeScreen() {
    const navigation = useNavigation<HomeNavigationProp>();

    const handleIdentifyPress = () => {
        // Navega para a tela 'Camera' definida no AppNavigator
        navigation.navigate('Camera'); 
    };

    const handlePremiumPress = () => {
        // Placeholder para a lógica de ativação Premium
        Alert.alert("Ativar Premium", "Iniciando seu teste gratuito de 7 dias e liberando recursos PRO!");
    };

    return (
        <View style={styles.container}>
            {/* Status bar (topo do celular) em modo escuro */}
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            
            {/* --- Cabeçalho (Fixo no Topo) --- */}
            <View style={styles.header}>
                <Text style={styles.logoText}>CoinApp</Text> 
                <TouchableOpacity onPress={() => Alert.alert("Buscar")} style={styles.searchButton}>
                    <Ionicons name="search-outline" size={26} color="#00bcd4" /> 
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* --- 1. Imagem Central da Moeda --- */}
                <View style={styles.coinDisplay}>
                    <Image
                        source={{ uri: MOCK_COIN_IMAGE }}
                        style={styles.coinImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.coinImageText}>Moeda Padrão de R$ 1,00</Text>
                </View>

                {/* --- 2. Botão Principal de Identificação --- */}
                <TouchableOpacity style={styles.identifyButton} onPress={handleIdentifyPress}>
                    <Ionicons name="scan-outline" size={28} color="#121212" />
                    <Text style={styles.identifyButtonText}>IDENTIFICAR MOEDA</Text>
                </TouchableOpacity>

                {/* --- 3. Seção Premium (Harmonizada em Ciano) --- */}
                <TouchableOpacity 
                    style={styles.premiumCard} 
                    onPress={handlePremiumPress}
                    activeOpacity={0.8}
                >
                    <View style={styles.premiumTextContainer}>
                        <Text style={styles.premiumTitle}>Acesso Ilimitado à Catalogação!</Text>
                        <Text style={styles.premiumCta}>Seu teste Premium de 7 dias é grátis. Ative agora!</Text>
                    </View>
                    <View style={styles.premiumIconContainer}>
                         {/* Ícone de diamante em Ciano */}
                        <MaterialCommunityIcons name="diamond-stone" size={24} color="#00bcd4" style={{ marginRight: 8 }} />
                         {/* Ícone de setinha pro lado em Ciano */}
                        <Ionicons name="chevron-forward" size={24} color="#00bcd4" />
                    </View>
                </TouchableOpacity>
                
                {/* --- 4. Seção de Informações (TÓPICOS SOLTOS E LONGOS) --- */}
                <Text style={styles.infoSectionTitle}>Explore o Mundo da Numismática</Text>

                {INFO_CARDS.map(card => (
                    <InfoCard key={card.id} card={card} />
                ))}

            </ScrollView>
        </View>
    );
}
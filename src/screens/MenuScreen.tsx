import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/MenuScreenStyles';

// Variável mock para simular o estado da assinatura do usuário
const IS_PREMIUM_ACTIVE = false; 
const APP_VERSION = '1.0.0 (Build 20241005)';

// MOCKS: Em um aplicativo real, estes seriam URLs para seu site.
const PRIVACY_POLICY_URL = 'https://coinapp.com/privacidade';
const TERMS_URL = 'https://coinapp.com/termos-de-uso';


// --- Componente de Item do Menu ---
interface MenuItemProps {
    icon: string;
    text: string;
    onPress: () => void;
    isPremium?: boolean;
    color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onPress, isPremium = false, color = '#FFFFFF' }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Ionicons name={icon as any} size={24} color={color} />
        <Text style={[styles.menuItemText, { color }]}>{text}</Text>
        {isPremium && <Text style={styles.premiumBadge}>PRO</Text>}
        <Ionicons name="chevron-forward" size={20} color="#555555" />
    </TouchableOpacity>
);


// --- Tela Principal do Menu de Configurações ---
export default function MenuScreen() {
    
    // Simula a navegação para o gerenciamento de assinatura
    const handleSubscriptionPress = () => {
        if (IS_PREMIUM_ACTIVE) {
            // Em um app real, abriria a loja (Play Store/App Store) para gerenciar
            Alert.alert("Gerenciar Premium", "Sua assinatura está ativa. Abra a Play Store para cancelar ou atualizar.");
        } else {
            // Navegaria para uma tela de Vendas/Oferta Premium
            Alert.alert("Assinar Premium", "Desbloqueie todos os recursos! Iniciando página de compra...");
        }
    };
    
    // Função para abrir links obrigatórios
    const handleLinkPress = (url: string, name: string) => {
        // Usa a API Linking do React Native para abrir o navegador
        Linking.openURL(url).catch(() => Alert.alert("Erro", `Não foi possível abrir o link para ${name}.`));
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            
            <View style={styles.header}>
                <Text style={styles.title}>Configurações</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                
                {/* 1. SEÇÃO DE ASSINATURA */}
                <Text style={styles.sectionHeader}>CONTA E ASSINATURA</Text>
                
                <MenuItem 
                    icon={IS_PREMIUM_ACTIVE ? 'star' : 'star-outline'}
                    text={IS_PREMIUM_ACTIVE ? 'Assinatura Premium (Ativa)' : 'Ativar Premium / Assinar'}
                    onPress={handleSubscriptionPress}
                    color={IS_PREMIUM_ACTIVE ? '#00bcd4' : '#FFFFFF'} // Destaque para Premium
                />
                
                <MenuItem 
                    icon="person-circle-outline"
                    text="Detalhes da Conta"
                    onPress={() => Alert.alert("Detalhes da Conta", "Exibir informações de login e perfil.")}
                />
                
                <MenuItem 
                    icon="trash-outline"
                    text="Excluir Conta e Dados"
                    onPress={() => Alert.alert("Excluir Conta", "A exclusão é permanente e obrigatória por lei de dados. Deseja continuar?")}
                    color="#F44336" // Cor de alerta
                />
                
                {/* 2. SEÇÃO DE PREFERÊNCIAS */}
                <Text style={styles.sectionHeader}>PREFERÊNCIAS GERAIS</Text>
                
                <MenuItem 
                    icon="notifications-outline"
                    text="Notificações e Alertas"
                    onPress={() => Alert.alert("Notificações", "Acessar tela de ajustes de notificação.")}
                />

                <MenuItem 
                    icon="color-filter-outline"
                    text="Tema (Apenas Escuro)"
                    onPress={() => Alert.alert("Tema", "Por enquanto, somente o tema escuro está disponível.")}
                />
                
                {/* 3. SEÇÃO DE AJUDA E SUPORTE */}
                <Text style={styles.sectionHeader}>SUPORTE</Text>
                
                <MenuItem 
                    icon="help-circle-outline"
                    text="Ajuda e FAQ"
                    onPress={() => Alert.alert("Ajuda", "Abrir central de ajuda online.")}
                />
                
                <MenuItem 
                    icon="mail-outline"
                    text="Suporte por E-mail"
                    onPress={() => Alert.alert("Fale Conosco", "Enviar e-mail para suporte@coinapp.com")}
                />

                {/* 4. SEÇÃO LEGAL E VERSÃO */}
                <Text style={styles.sectionHeader}>INFORMAÇÕES LEGAIS</Text>
                
                {/* **OBRIGATÓRIO PARA A PLAY STORE** */}
                <MenuItem 
                    icon="shield-checkmark-outline"
                    text="Política de Privacidade"
                    onPress={() => handleLinkPress(PRIVACY_POLICY_URL, "Política de Privacidade")}
                />
                
                <MenuItem 
                    icon="document-text-outline"
                    text="Termos e Condições de Uso"
                    onPress={() => handleLinkPress(TERMS_URL, "Termos de Uso")}
                />
                
                {/* Número da Versão */}
                <Text style={styles.versionText}>
                    CoinApp | Versão {APP_VERSION}
                </Text>

            </ScrollView>
        </View>
    );
}